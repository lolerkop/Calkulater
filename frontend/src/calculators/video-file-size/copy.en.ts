import type { CalculatorCopy } from '../../lib/platform/types';

export const videoFileSizeCopyEn: CalculatorCopy = {
  name: "Video file size calculator",
  slug: "video-file-size-calculator",
  shortDescription: "Recording size from video and audio bitrate — in gigabytes and mebibytes.",
  longDescription:
    "Turns bitrate and duration into a file size. The video and audio streams are added together before the conversion to bytes: they are written into one container, and counting them separately with rounding at each step loses accuracy at the seam. Audio at 128 kbit/s adds almost 58 MB to an hour of recording — an amount usually waved away. The gigabyte here is decimal, 10⁹ bytes, the way bitrate is specified and storage is labelled. The binary mebibyte appears on its own row so the discrepancy with Windows Explorer is visible rather than looking like an error.",
  seoTitle: "Video file size calculator from bitrate",
  seoDescription: "Calculate a video file size from the video and audio bitrate and the recording length — in gigabytes, megabytes and mebibytes.",
  h1: "Video file size calculator",
  keywords: ["video file size calculator", "bitrate to file size", "how big is a video", "recording size calculator"],
  howToUse: [
    "Enter the video bitrate — it is set in the camera or the encoder.",
    "Enter the audio bitrate, usually between 96 and 320 kbit/s.",
    "Enter the length of the recording in minutes.",
    "Compare gigabytes with mebibytes if you are checking against Explorer.",
  ],
  howItWorks:
    "The video and audio bitrates are added into one stream, multiplied by the length in seconds and divided by eight to convert bits into bytes. The gigabyte is decimal, the mebibyte binary.",
  example: "Ten minutes at 8 Mbit/s video and 128 kbit/s audio takes 0.6096 GB, shown as 581.36 MiB in Explorer.",
  faq: [
    { q: "Why does the size differ from what Explorer shows?", a: "Windows treats a gigabyte as 2³⁰ bytes, while bitrate and storage use 10⁹. The same recording is therefore both 0.6096 GB and 581.36 MiB." },
    { q: "Does audio need counting separately?", a: "It is already counted: the bitrates are summed before the conversion to bytes. Over an hour, a 128 kbit/s track adds almost 58 MB." },
    { q: "Does this work for variable bitrate?", a: "Approximately. For VBR enter the average bitrate the encoder reports — the result will be close, though not exact to the byte." },
    { q: "What about container overhead?", a: "MP4 or MKV housekeeping data takes a fraction of a percent and is not counted: against the streams themselves it sits below the error in an average bitrate." },
    { q: "How do I pick a bitrate for a target size?", a: "Adjust the bitrate until the size matches your target. The relationship is linear: half the bitrate gives half the file." },
  ],
};
