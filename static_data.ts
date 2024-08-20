// files and responsesSource(mockResponses) were changed from objects to Maps

export const files = new Map<string, string>([
  ["file1.txt", "out1.txt"],
  ["file2.txt", "out2.txt"],
  ["file3.txt", "out3.txt"],
]);

export const responsesSource = new Map<string, string>([
  [
      "file1.txt",
      `Hello world! : 2024-02-22 14:35:30 UTC
      Goodbye world! : 2024-02-22 16:35:30 UTC
      Hello? : 2024-02-22 08:35:30 UTC
      Hi : 2024-02-22 12:35:30 UTC`,
  ],
  [
      "file2.txt",
      `How are you doing ? : 2024-02-22 13:59:30 UTC
      Fine : 2024-02-22 12:44:30 UTC
      How about you ? : 2024-02-22 22:35:30 UTC
      Same : 2024-02-22 07:39:30 UTC`,
  ],
  [
      "file3.txt",
      `Have you seen high elves ? : 2022-02-22 14:35:30 UTC
      HESOYAM : 2023-02-22 14:35:30 UTC
      BAGUVIX : 2021-02-22 14:35:30 UTC
      THERE IS NO SPOON : 2020-02-22 14:35:30 UTC`,
  ],
]);