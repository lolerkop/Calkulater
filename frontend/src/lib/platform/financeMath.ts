// Constant nominal rate, monthly end-of-period cash flows. Separate the factor
// from principal multiplication so a tiny rate does not underflow amount*rate.
export const annuityPayment = (amount: number, monthlyRate: number, months: number): number =>
  monthlyRate === 0 ? amount / months : amount * (monthlyRate / -Math.expm1(-months * Math.log1p(monthlyRate)));

export const wholeMonthsFromYears = (years: number): number | null => {
  const months = Math.round(years * 12);
  return Number.isSafeInteger(months) && months >= 1 ? months : null;
};

export const logExpm1 = (value: number): number => value > 50 ? value + Math.log1p(-Math.exp(-value)) : Math.log(Math.expm1(value));
export const logAdd = (a: number, b: number): number => {
  if (a === -Infinity) return b;
  if (b === -Infinity) return a;
  const largest = Math.max(a, b);
  return largest + Math.log1p(Math.exp(Math.min(a, b) - largest));
};
export const log1pExp = (value: number): number => value > 50 ? value + Math.log1p(Math.exp(-value)) : Math.log1p(Math.exp(value));

// B(n)=I(1+i)^n+C((1+i)^n−1)/i, with C deposited at month-end.
// Logarithms keep finite products representable when the growth factor alone
// overflows. The short-horizon series retains tiny positive accrued interest.
export const savingsBalance = (initial: number, contribution: number, monthlyRate: number, months: number): { balance: number; contributions: number; interest: number } => {
  const contributions = contribution * months;
  if (monthlyRate === 0 || months === 0) return { balance: initial + contributions, contributions, interest: 0 };
  const x = months * Math.log1p(monthlyRate);
  const growth = logExpm1(x);
  const initialInterest = initial === 0 ? 0 : Math.exp(Math.log(initial) + growth);
  const contributionFuture = contribution === 0 ? 0 : Math.exp(Math.log(contribution) + growth - Math.log(monthlyRate));
  let contributionInterest = contributionFuture - contributions;
  if (months <= 1 || x < 1e-5) contributionInterest = contribution * accumulationExtra(monthlyRate, months);
  const interest = initialInterest + contributionInterest;
  return { balance: initial + contributions + interest, contributions, interest };
};

// Σ(1+i)^k−n, k=0..n−1. Cancellation-free series for a tiny total rate.
export const accumulationExtra = (i: number, n: number): number => {
  if (i === 0 || n <= 1) return 0;
  if (n * Math.log1p(i) < 1e-5) return n * (n - 1) / 2 * i + n * (n - 1) * (n - 2) / 6 * i * i + n * (n - 1) * (n - 2) * (n - 3) / 24 * i * i * i;
  return Math.expm1(n * Math.log1p(i)) / i - n;
};
export const scheduledLoanInterest = (amount: number, i: number, n: number): number => {
  if (i === 0) return 0;
  if (n * Math.log1p(i) < 1e-5) return amount * ((n + 1) / 2 * i + (n * n - 1) / 12 * i * i - (n * n - 1) / 24 * i * i * i);
  return annuityPayment(amount, i, n) * n - amount;
};

// A subnormal division can stay nonzero yet materially distort an interest
// rate. Reject that conversion rather than publishing a false small gain.
export const divideRate = (rate: number, divisor: number): number | null => {
  if (rate === 0) return 0;
  const result = rate / divisor;
  const reconstructed = result * divisor;
  return result > 0 && Number.isFinite(result) && Number.isFinite(reconstructed) && Math.abs(reconstructed - rate) / rate <= 16 * Number.EPSILON ? result : null;
};
