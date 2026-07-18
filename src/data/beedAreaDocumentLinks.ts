import type { AreaDocumentLinks } from './bsitAreaDocumentLinks'

const driveFile = (id: string) => `https://drive.google.com/file/d/${id}/view?usp=drive_link`
const driveFolder = (id: string) => `https://drive.google.com/drive/folders/${id}?usp=drive_link`

const fileParameters = (ids: string[][]) =>
  ids.map(([systemInputsProcesses, implementation, outcomes]) => ({
    systemInputsProcesses: driveFile(systemInputsProcesses),
    implementation: driveFile(implementation),
    outcomes: driveFile(outcomes),
  }))

const folderParameters = (ids: string[][]) =>
  ids.map(([systemInputsProcesses, implementation, outcomes]) => ({
    systemInputsProcesses: driveFolder(systemInputsProcesses),
    implementation: driveFolder(implementation),
    outcomes: driveFolder(outcomes),
  }))

export const beedAreaDocumentLinks: Record<number, AreaDocumentLinks> = {
  1: {
    selfSurvey: driveFile('1H8Bzt3jcCMRrxjUSo5Ata9atrCa4bxI-'),
    programPerformanceProfile: driveFile('1tmbny7KpK1Rc8QpigDOQmNdR9dKnFLj4'),
    parameters: fileParameters([
      ['18yYfKTEKOfMFPH4DFVP65IO8oSW8OyyS', '1wrIV7A8V6q5FIC3M6H1Sp0JU8YKXrSy0', '18FQk2I40C-YnOEnQTs8_0TauhZu9Sxda'],
      ['1y0lCB2LpsS1G9gWfXVvV-bBxyxYVIRqm', '13yQPupBM9yAqYxCxA6NHbEOXthIF5qQL', '1KU8VyLRrKpY9sqWLvV9DoXkjOV9MKLW0'],
    ]),
  },
  2: {
    selfSurvey: driveFile('1O16X4UiWZaVfiAWKFqHUqeHVxJ8uvsQT'),
    programPerformanceProfile: driveFile('1iSJ6F9DNSGOvKoguGQD1WU7aFWe4pR8x'),
    parameters: fileParameters([
      ['1razAkOacLP2NUHmLkCsiMU8RSFQjF7FD', '1SbcQ3HfCgCteAbPRq2ZsnO_oHIZWjzii', '1uVJegQiX3Us9XReSsozfQDOMTbYRGXcH'],
      ['1Unu_PGh7Z2FmBoqUntUzG0Kz_P4n4YVf', '1Y14ydja_SRZp20rE2-Pc5A1IDEat6xu_', '1NqmZL3f7fvKILWl9DxfeF_pe3cY2Sgml'],
      ['18v74_tfygHaPnbCfSX7Z1kN_2pAPBP2L', '1sqRH2flUoi7XqEQDAmoZ7xkPX-tzALX7', '10fuwpSuMsDUFNlZQZ3u4M7DuMHdDdV78'],
      ['1NYJVzGN4pmmPGTJwHKW4M1XZKes5pRXr', '1IoLEMKAW6bRKQCN8PAkThNpvAQMnjbwP', '1nYuo0MF0Nj7QEdDaxPrz-cm5G5ij5fmR'],
      ['1_TDuoXtqemgZSJd_jU25-Lvb7wcGR8-_', '1PBE7yus1b9KnRDMmjFrJQ6PL-oKDSALa', '1ayhITaATt0GUStlDmFMIcibA38gbrWLb'],
      ['1T7sRUYEZJHtG16p43476cvfLYvd7ScxT', '16W3XXh_mOT_ySwiGE9xpFphJGj5V8U9z', '19RhUODxGbofrQ1UQMV0QlG_lg0miK4vO'],
      ['1HqVX5_RnvDHArlWkRhKG_4DYqpaH0Ox0', '1SQQuvkJ-8cIpHmYWpw7Wzp_yEGdo2NnD', '18CygAhgR6DB1wU6PgervcUUBubHzbndQ'],
      ['1-hMUKv3g5LVmfevXLS9sAjqTQksd6E0u', '1C9Z1HK1PtaVpXzUY-BQzKefqi5q_i56E', '1tSluNywExQf1WyW9UB-yLBCkGDniFit1'],
    ]),
  },
  3: {
    selfSurvey: driveFile('10B_L8cte9b_Hod9GCK8FTP2TvBexIcPR'),
    programPerformanceProfile: driveFile('1aqVqtJ-l2Kq5gOAg2rssBw9QltbZRH2V'),
    parameters: fileParameters([
      ['1V-PIkW2mPbN8JbE9mZX_svls1Xh-1BLw', '1nK1SfdIeBpn_AqWE_4prz4j7OFyX8OLF', '19PfnFoUneH-x12F3y_m8Avfy_07Eo8Ye'],
      ['1uFGQ4sq3MxEIv1qyE0NUtG2XPpkaFbNI', '1m4AZpBW9A2T8M7VveySXqdeVr81a7m_G', '1aG6LgKm0yQHnLWAj4La8gvCimDPtpt52'],
      ['15djXadF0juz5Hbc52CWk1zSVeZQlU6fn', '1XkeJgt0xUU9HZZMjWwhOcw-mIho-dpv1', '1Inv8n6D7AjXMEpe3JdoByPgqIvgkjGHT'],
      ['12o2DwVYwufMSuw4Z1U9BGRWwcUeeq79w', '1rbcgYSdIbmMeVUY-6e-z71nXQJ22OZju', '1ynkKY2WXNqlxkQF772fIkXiL5yFI0OoQ'],
      ['1f272g1-XC-OR3qtl1qKXB6AnpEomnVX0', '1Ztb3buzzIVMSgioiLLq2XZiBoytOFJin', '1YayXr_HGQZXEnVKKI4rn3ZbtO897OGnV'],
      ['1IZ8TBzoZ2Aqo1pbKgCwvv2AUgPM5j4yB', '16O5rEMoQ428S8YrlMF2bcU0MM8ip3cVI', '1avKq3ml1dpJBl8YN9CtpaSUoS7b2wRGD'],
    ]),
  },
  4: {
    selfSurvey: driveFile('1XAk0hxXJ84Wvq91BHu7Yh1o21TDd-UyP'),
    programPerformanceProfile: driveFile('1zLBmKRhzPgHQSOk_zoJZm3XKFM8yIHkY'),
    parameters: fileParameters([
      ['10rYF3olA-OPrJKlTHPcqbhsiaMlgzZzO', '1pH-ZvRTiAB-mBo1kUyEOGSHW5Vu0YCSL', '1iyVpeu7wvLKwshCDfbuDfjFFyntr4EM-'],
      ['1NXhzmR3GpwC-NZ-PFpXfL1GCEyuUz9pj', '1xfvMhv-S7DPFaZJKHjShdodSgkZWpMIs', '1lo2IYfc-J3Bg1r0oK6Q6-hSI2xLk5Ymb'],
      ['1QzafDANc4ETVeGfyThIXYbWB_X__2eBk', '1fU-QHwpmbZ93Y8yu9OljdVmu9zdjJ46k', '1Z4K-toQN_zWlrHOGemxA7bxpJkgsD87X'],
      ['16Kseh99w_lTOjTqIX7dZ3-e1IzxLOrME', '1sNSU4cpd-UEUQjpUZ4NzyBc-QlTaT4T5', '1UE1GJXhJFFQOp8BoLvl-9C6HXn07bGlx'],
      ['1PMI1WP3f8XyQjbEW9yDASas7cxhqrd-Y', '18tsrKRfLNt1Lp7Dgh3TeYpQDpzEWcpo2', '1qUAVcYRQgDGK_VFqzK4sfB7k5nff4flH'],
    ]),
  },
  5: {
    selfSurvey: driveFile('15p3Kkd7M9tlh5ANs3_vnvw-j6wxvArfm'),
    programPerformanceProfile: driveFile('1YsCIyXhs_6f8fECrOuJSJ348UYvFjv0x'),
    parameters: folderParameters([
      ['16lxCsKcytwtQaT_6uyZAgXSyy3w6jfWe', '1nkv7V_hf1CV7KQRoVJMre0IZExEEV0p6', '1TIynJpN0nrqH49B9CPc17U3e3dNhEhGQ'],
      ['1qRugRk6tbekBlkauHMRvvkzjU-JlVsdx', '1R7jy973PY8zsHjrkKOFFO2b_gYCSEmW1', '1SckAxYbWftIq9QPyTsdY6exgpVegR4aD'],
      ['1ENsiKAJICJ-6HHO6DdOoTdfqkbXlMeCT', '10yPysyjqsNBFbvZhnnyOgTGF8Rn0_Nx_', '1mn_etFloFzZ-799-H_3FfXLCUEFD-RB0'],
      ['1-zZLtnwaztbJK9ahXBsteZx9kbSwGuNX', '1aV4SB2QQHk6JQ47wI96riAkUjm4DslQ7', '1_XP2vsl5udzSCfd_GzzBnK2WQrC6hELp'],
    ]),
  },
  6: {
    selfSurvey: driveFile('1AnGOTY_XIGhV2wdnnwrOSx06WaK0SGBw'),
    programPerformanceProfile: driveFile('1Lz2gjWOM7NCO9g4l_r_qVSe49FfX3l5s'),
    parameters: [
      {
        systemInputsProcesses: driveFile('1dcNRWhtpW9XiZKvpLiyUFfvmt76UYQpS'),
        implementation: driveFolder('16sHTuxd-4-C-tTFgrszLnK6eM4DjuzlB'),
        outcomes: driveFile('1funIxMVE80qWuf23vuZrGgehWhzM6LKt'),
      },
      {
        systemInputsProcesses: driveFile('1SaGkYujs9NxgBlGURFODLhbeQIWw4En2'),
        implementation: driveFolder('1h9gwUvweqlqucJPN3rj78mUqH7H-sYtg'),
        outcomes: driveFile('1ZYdnZL2B82hE4iQziLTQ_tpN1NwkaTNw'),
      },
      ...fileParameters([
        ['1z7QNFLC7XmPgEz9A3wrwSEm6fqyuvJGP', '1ZE3WBy2NBw4x3EQqsyVmJnxgACcGV474', '1wVhKOYFHlm53dHkfs3_Sp_49P8mNI2Qz'],
        ['1aRvQV99LwvVYCS2E3vfj4eP7hiGkP6xt', '1OhPr376P8AulEhQz-LHxnVrtqKpR8KDp', '16ss7x5XKGotJqybz5mpj2DM7uukr653k'],
      ]),
    ],
  },
  7: {
    selfSurvey: driveFile('1HUTK3DcWox_sMcibpwC8QgDjqgN8rwNU'),
    programPerformanceProfile: driveFile('1KN8h37NdieWnXhfXq8nOwGonOEPG0Bpo'),
    parameters: fileParameters([
      ['1qMCUdNd9GINZkTPiVX93MlGvRwELT69c', '1FnJhtdNwmdn-uR9ZrewiNDTwnec69Gfg', '1S-OvrAAJXbCgehSyrhaWC3Z-d8rGpatW'],
      ['1DDu05PA-GSvqmNr5WcMNBefX8MEEWEue', '1S9q59KCVxRQ0qZEC6Gidoe44IJ8WAvLX', '1LWkwmfvo66JyPMd3ysmV-VoIOLwxEeYy'],
      ['1nhxew1eLIm-LyCP1bbzVoIAkLSPEYYDv', '17u3Oc5Vk_JX_9lj8nrCVVGkFeJE-FlMP', '1HhDP1fCagmH2LOdtB8BM04eMjYHSwBxu'],
      ['1hVp-BEqzl4zBzOvpjvTySLa0mrC8IH9V', '1aeMavn230bnf1xCuPyKL7JcJ3rpnph5w', '1gwHoYD8xAZFgCPT6appQZ3LDY132JPwc'],
      ['1jwm5tU_RQiUf0qJVkaG2x2eWhAp2NB3c', '1-ztQAKrSI9-NTcitTctk-INS94R33cRF', '1W7nNQU-VKAZvR8MRsct_DgIKEnygmm8s'],
      ['1E6-yr7KS8ZRA-6uijR3kHUuDFx1hkJ-x', '1UlLrlG91qHfwMiTZ39_-HyBR0epf7_eu', '1ijI9SEdimkMUWxsGiLlRrnYnKYI8sxty'],
      ['1MaggcMN1YVN27gdXm2h965vUFMR1heU8', '1UdgsQiK7OZ67A8ITMG8K9JuxOeBhAuCO', '12_hrNP4eknNvbb5AkFVPUhCV0HenM7aW'],
    ]),
  },
  8: {
    selfSurvey: driveFile('1AH0yP3e1XjYbj7coc2B_kO65HbS0yHp6'),
    programPerformanceProfile: driveFile('1MyPxXK8vyHAtURYN3x5NHMX97suhzdVg'),
    parameters: folderParameters([
      ['17ZP0J0bMleMHCAlCG_6yWMU6XTW4dzBw', '10XlErwz7fMK4qs-FFjvqhTQT5JrPn151', '1GXLb1q9Kobz2w2RjIr2XkWjEJRLdCnDG'],
      ['1g0wOtC7soVgl0B8fiBxwak-gNKMMIIyN', '1wSkTNsceh5es3I1MVJlsqXzbOa_vxaP7', '1atmwxHiNY-bnVS3lozHEKr-dut5Eap_p'],
      ['1o45HUjEryEjMZGJYY958LX-5ifCVGdpV', '1hccqI-iaGsI1dTLneeSk-axwGVSpzdYs', '113GBLD2_mw1cFqTfOgDPyUCDt4vfDlnJ'],
      ['1MNZyNkJl2acgZLeqAZsiJ5RCk7VumpP5', '17c1S0k3aMfUCzR0hLX9EBuVlV_yOfEmL', '1Ub1wO8hkVk0JjHcZ0XCAfex2f6gNHQc4'],
      ['1osMpzLTBkhGY-jhv54A8sG6V9UI5Area', '1T6-CRf0HtG2F1CHXVAIZXAj2knW310Mw', '1o7gKfVSg96R_UrwrcjWQlILfZCX5mz3J'],
      ['1HVhXzWPwvdU67mPLfkuogZVshcJ3y5f4', '12yvZu2TDPfZ91CZ_IIfUdFfOz_0ynRnN', '1Ffn3CEPtcmQysi_jd_jaepcU6jS05cjY'],
      ['1eSBYZidUxY21MY9ql124FAsuPw6PriJU', '1kjoYSNTx6g13PYTeix8hdodH21KEpiWf', '1p2_JRn5_2IlmqYvYlER2O2OS2yFvsEZh'],
      ['1P5d9i5TWGWNjoeE2Pb1ffaZP_OO0ST2A', '1kTIL97U_P0xRVskyEkuDjBhEotWOpAVo', '1wFv_91UFx_JZ8S-2n6hr7LhuIafMTB21'],
      ['1MVGFXfrMj85GCOtfsvqpdS1IATKe09Ul', '1kn8SpiInW9slFR8RHphTVbxHJuJvjRzS', '1XiE-KoQbFuEFRX1PdTfqiUovqTiza4ox'],
      ['1MbzisswXONputYlNG8ifiOiK8AB2xTHM', '1ipqqjnsOla8QdEOul7JUY1w7IsGx1x-P', '1rk_uRlCiDQ5-X4TQHFLaHp4kIb7XqRk-'],
    ]),
  },
  9: {
    selfSurvey: driveFile('1OBasxqSGqignX5mgYhNKfvbyJMUeVDgr'),
    programPerformanceProfile: driveFile('1820QMfOHkph7eRNi90ZOnMkpLRKPBKwQ'),
    parameters: fileParameters([
      ['1wX-A69L6ufPRVZ1x8Km-Nw63cvoeHbaS', '1K6F-WodwkUm5YUgdhT7QRft2O6sKHEV0', '1TJoXqFaiJa4Ms0Vd5xIgJH-zCbp39rpM'],
      ['1HiR6XqLHqmEasDo3BcrwkkptZasIbrNS', '1vqbDo3l6iFjsB0HMJY9fontkbHNGFSzE', '1hFABUSaJxLTycNlRgP2IK_9cgaX-o2b6'],
      ['1406eggaRuo5oFVPaiGJArsXe8aNSCQRr', '1wmm--N55k5FoBviva0rxfP3kERSB9Tu-', '1kIdyJbw9NrYj25LqkQDaVIWStKtcHLw8'],
      ['166h5SptCNIIyTzec8LOaa9FSVoJl1TOl', '1xheGyl9Tx_JiSCus5ahqaS786HYn_Vu5', '1xpYom3BWPxU8_6C-D0bIumUavZVNvgIn'],
    ]),
  },
  10: {
    selfSurvey: driveFile('1rU4GIFDenyt2HGQla3UsfB2Wq-gCYmK8'),
    programPerformanceProfile: driveFile('1Nn-ZQafir2VBJ5V5dU_4U2yrNmaLnEUN'),
    parameters: fileParameters([
      ['16tFhBaVewbXD9AshuEXTJOQH8QXiK2GM', '1YeoqOxTvHbASFKWvYo7-jYZ9rMWF1BVe', '1oVL17WiHo-SVPod5ptfBb_pSJ1jO_PeB'],
      ['1xAaZQEy7JDL63OQcz2ee5XD__L9-dBro', '19K0y8wZuAI6w1lPliMgdiyx2okYa1b4F', '1y3Dmbt-GXOGv40IfzxVBgQP1ZEa_WVIF'],
      ['1Dsz5rJ2gBOIrtgjk0_OYk-l2mSkROr1k', '1btN6dSTAhnYHPrngMhWdi_aioMws3SEa', '1aKMgAUChQOfWdJVGHAokdxRN0on69Vzi'],
      ['1qDTEh8CoVPaHwpqUQ6ywVesnmbfvXwgF', '12s7QWQ_pdohhSlSKpoJwB8pjnGJU-TYP', '1oyba7uo5av2vu8C7cFB8foQxwX6BJEH5'],
      ['1IQRI-I5aQ7xqL6fmLv5XOj4GpA0m-zzx', '1GLChsqabwPsCi_f3wSiWZY04ryrjxgB8', '1eCc_OELm7vvqiivPrj1KdqPcWhvoq_9x'],
      ['1cgN9e8Ef1ZZMc6e_Y1QZBMRr3LN-Z_DH', '1qsJtEPLfz4ZdhcaeMtBxqW6xs2syOV8Z', '1SNsnSiuQZ1uLVN-TPtdFQ-kJqjDXokX7'],
      ['1FALwYX33rRJjuhVt6HCp4fpZtf0mdaab', '1-7OiV5qoSxblpI7E8phqV8Qej5fMQBj2', '1Zw4DuGMhmyEF3So8qblZZDZhb9NQovAs'],
      ['1_jL78HVFWatsTWhlLqjbvocBMhTXY0gK', '1NBskMhvC7WDlrlPNKHQjndxqbvcbrkVm', '1s_9lPXjoeESFScvuSphKWuDFZs84XS0k'],
    ]),
  },
}
