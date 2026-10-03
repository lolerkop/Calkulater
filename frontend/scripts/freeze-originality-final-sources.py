from pathlib import Path
import json,hashlib,datetime,sys,re
base=Path(__file__).resolve().parents[1]
paths=set()
for directory in ['src','scripts','tests','e2e','public','patches']:
 for p in (base/directory).rglob('*'):
  if p.is_file() and not p.is_symlink() and '.DS_Store' not in p.parts and '__pycache__' not in p.parts:paths.add(p)
# Reports used as fixed test inputs are source evidence, not mutable summaries.
for directory in ['tests','e2e']:
 for script in (base/directory).rglob('*'):
  if script.is_file() and script.suffix in {'.ts','.mts','.tsx'}:
   source=script.read_text()
   for relative in re.findall(r"['\"](\.\./reports/[^'\"]+)['\"]",source):
    fixture=(script.parent/relative).resolve()
    if fixture.is_dir():
     # Some tests construct file URLs from a fixed archived-evidence directory.
     paths.update(p for p in fixture.rglob('*') if p.is_file() and p.name!='.DS_Store')
    elif fixture.is_file():paths.add(fixture)
    else:raise SystemExit('Missing imported test evidence '+str(fixture))
   for relative in re.findall(r"readFileSync\(['\"](reports/[^'\"]+)['\"]",source):
    fixture=base/relative
    if not fixture.is_file():raise SystemExit('Missing read test evidence '+str(fixture))
    paths.add(fixture)
for p in base.iterdir():
 if p.is_file() and (p.suffix in {'.json','.ts','.mts','.mjs','.cjs','.js'} or p.name in {'.gitignore','.env.example'}):paths.add(p)
for p in (base.parent/'.github').rglob('*'):
 if p.is_file():paths.add(p)
files=sorted([{'path':str(p.relative_to(base)) if p.is_relative_to(base) else '../'+str(p.relative_to(base.parent)), 'sha256':hashlib.sha256(p.read_bytes()).hexdigest()} for p in paths],key=lambda r:r['path'])
aggregate=hashlib.sha256(json.dumps(files,separators=(',',':')).encode()).hexdigest()
value={'checkedAt':datetime.datetime.now(datetime.timezone.utc).isoformat(),'workspace':str(base),'scope':{'engines':376,'calculatorUrls':1866,'languages':5},'algorithm':'SHA256 of compact UTF8 JSON array, sorted by relative path, each element path then sha256; source dirs+root config/package+parent.github. Includes reports literally imported/read by tests as fixed evidence. Excludes other reports/dist/node_modules/.astro/test-results and root reporting artifacts. No private env files.','files':files,'count':len(files),'aggregateSha256':aggregate}
mode=sys.argv[1] if len(sys.argv)>1 else 'write'
target=base/(sys.argv[2] if len(sys.argv)>2 else 'reports/originality-final-source-hashes.json')
if mode=='verify':
 old=json.loads(target.read_text());prior={r['path']:r['sha256'] for r in old['files']};now={r['path']:r['sha256'] for r in files};changed=[p for p in sorted(prior.keys()|now.keys()) if prior.get(p)!=now.get(p)];print(json.dumps({'count':len(files),'aggregateSha256':aggregate,'unchanged':not changed,'changed':changed}));sys.exit(bool(changed))
target.write_text(json.dumps(value,indent=2)+'\n');print(json.dumps({'count':len(files),'aggregateSha256':aggregate,'report':str(target)}))
