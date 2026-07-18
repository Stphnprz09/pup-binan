import { bsedEnglishAreaDocumentLinks } from './bsedEnglishAreaDocumentLinks'
import type { AreaDocumentLinks } from './bsitAreaDocumentLinks'

const driveFile = (id: string) => `https://drive.google.com/file/d/${id}/view?usp=drive_link`

export const bsedSocialStudiesAreaDocumentLinks: Record<number, AreaDocumentLinks> = {
  ...bsedEnglishAreaDocumentLinks,
  2: {
    ...bsedEnglishAreaDocumentLinks[2],
    parameters: bsedEnglishAreaDocumentLinks[2].parameters.map((parameter, index) =>
      index === 1
        ? {
            systemInputsProcesses: driveFile('1lks2uVwBXI2OHgyPOB6FjsmHRqCNqaGq'),
            implementation: driveFile('1B036ySy0wqUUU5xtRZ8HxO2sE1PCc4Ek'),
            outcomes: driveFile('1hJw4li0Yww68XdXqdVx6mux5py0MT1c_'),
          }
        : parameter,
    ),
  },
  8: {
    ...bsedEnglishAreaDocumentLinks[8],
    selfSurvey: driveFile('1vqFSy_BCg-HG735d2ztIHm9RSKs2UNn4'),
  },
  9: {
    ...bsedEnglishAreaDocumentLinks[9],
    selfSurvey: driveFile('1kUCXbyAHWogQu1QZhF7hvUWC_TdaSJDK'),
  },
  10: {
    ...bsedEnglishAreaDocumentLinks[10],
    selfSurvey: driveFile('1B5x1T8nMCncZuQTkSChBo1PwbnZEAKhQ'),
  },
}
