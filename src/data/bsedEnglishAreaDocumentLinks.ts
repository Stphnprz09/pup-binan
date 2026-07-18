import type { AreaDocumentLinks } from './bsitAreaDocumentLinks'

const comingSoon = '/coming-soon'
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

export const bsedEnglishAreaDocumentLinks: Record<number, AreaDocumentLinks> = {
  1: {
    selfSurvey: driveFile('1r63tJdi0kCrmwQKUGTFwG0T8LRmPTeSj'),
    programPerformanceProfile: driveFile('1wBEcrmVnZR5ohDVEftJYDQTk0-DouBpa'),
    parameters: [
      ...fileParameters([
        ['14FeH7FlIbc2tE9wpEdr4C17Ri8UO6Rfw', '1oFUaQw-u-ikJBQWf1YvNU1KbsryGbJQU', '1IRlIO5vbaxNuiEaKDy7R9igcIwKvc3WF'],
      ]),
      {
        systemInputsProcesses: driveFile('1L2RPt8Ar4F6ua0nbwahbalaobgH3H3WS'),
        implementation: driveFile('18vYKsFseToUwWxeOTYw9aIGl-b1llmd2'),
        outcomes: comingSoon,
      },
    ],
  },
  2: {
    selfSurvey: driveFile('1qOsBw036Ak2qLjRIFBv2R8CqfXktf0BA'),
    programPerformanceProfile: driveFile('1l6cUaURsyNyEPTtIkLpppF27bpmwLn9H'),
    parameters: fileParameters([
      ['1RFqVV7RTpnDz3Xi8KBJYOE5G3VXxdiBw', '1DrdjtpKBRk_kNCMTHOQp8dpPP_dHh50i', '1qZx_A-Fi4YufAxbaDVvyRpTsdQx1LqJl'],
      ['1RFqVV7RTpnDz3Xi8KBJYOE5G3VXxdiBw', '1DrdjtpKBRk_kNCMTHOQp8dpPP_dHh50i', '1qZx_A-Fi4YufAxbaDVvyRpTsdQx1LqJl'],
      ['1LZnaecr_6Qj5XN5CSwxlrlQLy7UeIfpJ', '1i1JTOzwnxH8fdEPYUDfDbTcWGgMDtq3u', '1eo4bsHF7238X3DjfpTPTDhtcKAqPLLFl'],
      ['1_TsCMiHvdW_vLovvYUzO9gmQr9d-WfUg', '1_U3vUkpzVju8uMOjyN_OLMzu1RAlALWM', '1r5SEqt-3zXHiqXRQEmKfeBUDIwkkG3YE'],
      ['1ZmVniyrPzGUH467NJA5Hbk-lXsMA942E', '1gkIMVR64ub5PMq7cz_RzHnfYGVWBD0vc', '139AOBn8XxYsCdBuU1J4Ry-46JIfM50T1'],
      ['1m0B3dcC6avGPvxGPCcKHWfVeXcPtnJVW', '1xkwAIEcWvJNV23VLQGSrAfPuwVeri06R', '1U4IcJthp1uEO1fZ_oD-HDZMBIjHtYKIR'],
      ['16q5RvyJtrOAw_0i1oCHTDpXbBUh-zJW3', '13lVM14Tym7QGgYSp-Q3x7RryWgjt4JP0', '1Gndws8Y4sFQwFAou6AyRGUXo9L5Joq4d'],
      ['1mDm7LEc7HpwRDQDQy4IiJ86clQFmAwEx', '1yUK9S6I41SgjLTCbe-LwakX9hvl08CGL', '1_ny17jk4OsONSKn4bxqDxaMkws4WBsv-'],
    ]),
  },
  3: {
    selfSurvey: driveFile('1uJOFRrytIEfpyXGF-2YraIYFhgkxxQcL'),
    programPerformanceProfile: driveFile('1_xOkyjzQbgZVzbz29QgQwGVOftQLWkot'),
    parameters: fileParameters([
      ['1Rp8zP6N0-7sCnKnYK6j5rs7sKp7TMUlK', '1_WJypUZOc5-NKHdEw7q3APMEgqTX-8U0', '11KCQVl6ShsUgkCl4cKbFW2zx6m2SYhlR'],
      ['1jJK7tUur8U-t0MPekci13FsEWfIQ9_aT', '1ZsuRkc4axKhwhlriEXWCDR6U1qOfug_3', '1UK1bC-dnx-q7gFlLCGoxWCqVLKAi3kTz'],
      ['1y83CXfhYFlg-B_hlrkdLy76h0KUta7jk', '1sK4urlGaVEurksy_Ko2sCUi8F20hfsBA', '11f-d1IdxltvwluoAfKGy7Q-scnJoAS9W'],
      ['1Sugr5Rtmrs5eHo_dHgHzptFmc4tOBjir', '1vbggV1FpIRO418Q-hrFJOBApVeNPQ84R', '1EyUb_tvK-qQasgbc3_o4qFsP8MTqEzhU'],
      ['1zCXtsD2fB0RDCsOEClsV3D9ixhR2BahO', '1GNJoMaOUoD0JbZeIj-rSZMdZZuCoilYV', '1vQIf8iLAidXHt8cS1iiSNZulENuhHpXR'],
      ['1-xcb2X_Jb2_G1rqwl5AOJ-O4Y65rr1Rn', '1njoAmYzq5kSHPNIIdgEMyGv-Byl3qtvP', '1B_ibF5o1PbbAx-pOBRAthTu1Q-xaP0-b'],
    ]),
  },
  4: {
    selfSurvey: driveFile('1r5DjsjnlsL28BqAz2Vq4XVe2KcP6UrgZ'),
    programPerformanceProfile: driveFile('1bKdvk5WkUjToQ6Uz7st-KvxTNoINrJ3a'),
    parameters: fileParameters([
      ['1nAsWqzmp22cIq0P1NraRXwWQ2wchAKoh', '1JWQvLuvrbQf9R1h-_AnbSrBzbOmR0au6', '1o_jfuDvG0UmiP7UGoR2uwAk7WDbZwmSw'],
      ['1dZsCZ39qB4rWDkAJkNEhXbM01ZOkyf10', '1F_4tekSm2_wzsYexgIX5PWbEHmuFSsQ3', '1DdpE8RcLVUlYHe_2gwX1HolvVUwg0AlJ'],
      ['1qxKaxsyUWv0WFjXtDvgYuhSMmKweQ2iV', '14J3UY9CZPx8dkU9YjZ9-UPqnF9Hwcc63', '1FA8Z71C7ww_U7T1J-D5LqMmEUxENr7pn'],
      ['1Cb2ZkCkBZmzQA3Kg434VrgYudP5hkz8w', '1IWwTUtUUgsMmoU_Rt4NIeEPIDGJ9Q6lN', '15A66IV2Jd7xW7Nx1TkjEZS-cf5YA_lRV'],
      ['1QBn4AD-byovXINkOZgRq0uTZTqhiziDL', '1g4hgouwYM-AZWUrht0lvRV-ltE31Vtf7', '1qfrtZXlmHjyMiz8KEVP6TcDsw9OmbnBy'],
    ]),
  },
  5: {
    selfSurvey: driveFile('1Dl0eDK4STTUhCWk242BFekhe55fahb96'),
    programPerformanceProfile: driveFile('1GqFsPbldCa5NYaGEqzCiOPmQAQRe2jKg'),
    parameters: folderParameters([
      ['1OOVsRW-VtMU3t27eAc0_AJpl6eFAYryR', '1KuIdIzj042S5PJMf2DXpyStDiOjWtuZR', '18L7SoPP-Zs5NXrmRcGLCwXPK4sGfe2Sb'],
      ['1M9nXER_SvT9Oj7UZ02BrY_h0SUzXVZh8', '1BLa8B_9oQNEZeyFAj7u7rww-CH6MItNW', '1CITQ7v-CGiDB0V71ruKkUMvzBLhJPgRH'],
      ['1AjTCrzaEaSUG2hSyuq0d_LmXcvkMN6VO', '1YSIliWXFwqVCNm-B4WMY8jv-GeNSJLW0', '1RK5mCdD4z-7yJEIbR4AIix4nRB37TQud'],
      ['1zsjBezXanJwsIojERWaR9DWS_m3iVGJf', '1hgt7hv1F8Eaoqs9UMcNyCvgVN4qnYdxz', '1j-3nKAwDEUBosrUGgrgr1w4x11TF2EMT'],
    ]),
  },
  6: {
    selfSurvey: driveFile('1qt4cbwifNbZA820npc49SO7JuBZ2PS-X'),
    programPerformanceProfile: driveFile('1zQ6PAby8zovxh1kJuYIHVrMkTA-pgH_W'),
    parameters: fileParameters([
      ['1v2ZtQRkl9iNb4skBLZM6MQq5wjAYL8jt', '1NykAQBwS4XS98Gt8fpGWPpDtbzzX3-qJ', '1mVwd7duy3l-9oxbigkACBR9Hl44oOYeh'],
      ['1I5UtQo1o6K6wloTr3ZC8mb5xZ81Szsi9', '1DJWftBXf_WqVHWrm1XtnqAx_JUYZ0cOU', '1XZ3hpr2vFHDWb7xGVSA4m0IhGo_LtIWm'],
      ['18x-xUAclv4BSF8esdA3N4QHKQeKJENTP', '1Fhv8JXFgDldUTcop-yxPzmdbbqOtqF4h', '1MsyNjqWxmhdDnC4fyI3jUmuci9sELIiT'],
      ['1cP6wwhxk3UfePtxOGbCO4bxI8lF6ic5J', '1A9Z8AqFuI_BGpQG_TIJtK74fjLZGkUXP', '1ZAuVaBUVIZOsC9tqjeldhCU2atyL1qyf'],
    ]),
  },
  7: {
    selfSurvey: driveFile('1bBm1KmNxnRRAx_AQKBnQhnM4fT4_Tcta'),
    programPerformanceProfile: driveFile('1UyEd-qP1lA81XGIp6uKu8ANyu7X_FG9L'),
    parameters: fileParameters([
      ['1lJvkaF1UO1MblsCaPY487BWFOh3GPebw', '1zw_clEKV0tMGPF596sce1G4amcxR3yHf', '16D3sJGhBmY4DDx39F6IHHwMt6NGch0gI'],
      ['1_CoQ-DoFLOkU7cRqVXhZkYM0QIqA9ehZ', '1EK9BgQGD96V4Rg5ebnEw5RqbVPn_YRyi', '1pqlzfrmcLTy_A_gvs7-xDFFWWkB6gd6O'],
      ['1Py-h-MxdW0K9a0HfSB2uwkiIm9GAvgoo', '11vwAOmI2-8wNUKej5txc0j5BcS1m9nvB', '1mhBtQ1ExVUbEU4VsZPLfCuQxT19kvio3'],
      ['191i4CvqdHO88fAY9pqikiIefjrNYrJAt', '1jGhznoieyUQj-jNJvV_ry74gsTvA6BKY', '1z--WN34ZWrgoz87ZVCr_WolF5DhFZpjx'],
      ['19Ffl3KrkxRL07Z5lNjM0oxooSPwawXmB', '1oxl0b6GXaesKTRmjARb1zEcZTGe0etNi', '1DuEp8_w6NfxS8VLfRoXvEw3aur0fTMS2'],
      ['1YlnK1aOc_hBTAvKk7iSp0G0I7tjt9Zv2', '15MN0WICdBrz29BmnO9iUjCP__MQ2APod', '1tPh0vcTCn1NYO01cFkRaHgEQImpDpvQC'],
      ['1E5hd-e2P51X6EZlnxF78yRSZwbThObNm', '1E7XEalPQgOYof9PDruoFIuYL5dauJPcg', '1DPlK7GZAkxnvPN0A-d3E5w2hafrSjKtQ'],
    ]),
  },
  8: {
    selfSurvey: driveFile('1bBm1KmNxnRRAx_AQKBnQhnM4fT4_Tcta'),
    programPerformanceProfile: driveFile('1R5H_iGqKb3Sy3DS_eMnwl4iZmzbqyiyH'),
    parameters: folderParameters([
      ['1AhJ7FCx50RgMlTRpQRrfLfMEYu-EhFZf', '1UCz-nHw7I7c0gkZ80wOpJrPWbViKNLIF', '1UwV94-mtVTy2dKXb4I88Uvkv_XRow2sH'],
      ['1URf7x9_IBcJNvEEhlzBrkdTZDqnq1Nw6', '13T9YATQl3fbAHZlUmpnEVSnU3MTQsKSz', '1PQSmwEEUqw7v0sJ9IuNqu4xoKSXPN2Ut'],
      ['16MqYgkBmHbY6sPJ5OjRR0HrQRs-69Eyg', '1zDFp2pac-hx5vomG8x_ovU43RT9fqvTH', '1yFxOz0IvVTXhcjYuckzgpllRHBMTSIoM'],
      ['1KZgAUi5Xxa4drOAr6yvnk64GHdP9-9Kr', '1NsNDPVRdTRGFWXOP_nsBImX2xTTShGa1', '1pUsDo_WRNIRSZrpE57uCGzz7Q_QT2l7B'],
      ['1Ya7TwAKjyUhdU0MED2mmy8R2L6FV2ty5', '1QFHIADLFLPcnJ91Fw9RuFo5cmT8VlnAt', '1ezQs-X5mbX-QLRvROvs_a6uzOTSh6Prz'],
      ['13gL_jdagA5q_oRHp7BGctC0RO6EcBLuE', '1Z6evkD6IJE03r2MFUZLJIdSo8DCcdRIF', '1vzJkfx_N654sZAP1REIEQndU1-wi7uP5'],
      ['1YEG98u-x5xi6vHtHJa5JZr2VKZ-JpqzY', '1v74fvYob-AhrKIkyzio7gkxPihkqUlTn', '18haLMWpHyQLqLC1XVu8IWXJ13U84oXVJ'],
      ['1nBb6YiYmBoiCWCAngU1Y0-NwUHrCt7Pc', '1WcU_5FEdXamjK5yGaOL0Esh9cTHgLNe1', '1Xwmp79cuFVjXgb8ALPKxzYXVzehK2o_N'],
      ['1-rYkB8d0H6RUgLESOYvxH6W0HwPoctAh', '1TXiPuJ_5NPg5xkUz4B_bdL5oCKqBcYg0', '1I_1c43Q4kJG9js1tQymB82NY0MpLz5Z3'],
      ['155YBmQLSE83k9gxcm-vPK4lUNxBxenzT', '1FXNNez1onc040emab37JpiLbkkFnuBOV', '11cAhZ_PJWolb_piv3IVNEZqwiRObZfWH'],
    ]),
  },
  9: {
    selfSurvey: driveFile('1bBm1KmNxnRRAx_AQKBnQhnM4fT4_Tcta'),
    programPerformanceProfile: driveFile('1xIkfr94rq0EMWZiw-cmcDOcAkB_LYIbZ'),
    parameters: fileParameters([
      ['1cPJ1Hf6SvuGzKEgi72_G0IogWg4OaTQN', '1yYh8z-TaEtDEbuW6oqUBGy6ba7Mjw1Co', '1AuxQlONmQ6pCNyoM3ScW7EERByD6zhUl'],
      ['1GegiAj8SiI7n1KESTecedlzK8bEEzcKg', '1oPh-zObpVEdusY0G8V_K0Fd1a1kaDvZd', '1nCgEVgNT8wFEWNfCmIBfDvJ_dBWxTSS9'],
      ['1s4v47iwdZE0Kgvo120JilHwfDlUtwVxN', '11cE_5IcUFXpyZVvV2eMteAXHc4xkwU-T', '1Fh0ALRJXhW6cE4fq4aBO4AM0VKRwfAGA'],
      ['1Ig710WBlwPAQrc6hqsv675idkXmCU_z0', '1wMqO7hnv25vwBUrUMldR4lS9y9E-Uakl', '13QpoRXWq9XQvsssKguIgpfAEKT1XgtSs'],
    ]),
  },
  10: {
    selfSurvey: driveFile('1bBm1KmNxnRRAx_AQKBnQhnM4fT4_Tcta'),
    programPerformanceProfile: driveFile('1OUzeazvrACU6FikVyAXzv359rXFvXher'),
    parameters: [
      ...fileParameters([
        ['1o0dcdof9-z8652Cvbo3D1h9RBEJShlmF', '1py6R0G_yI271DKQDG9inGLzt-hVPpMNj', '1gImLho6PxfDl7Zr2ByT5uneTiHJwluCT'],
        ['1-11i7PhyU2d0F_z2qAxtaKoxfPuIUkc-', '13JCcdsaDFHobCobBIIC75LU7HfosGt8d', '1W1plKSUU2Yg89zO8n6jRWvB8zwXggHHh'],
        ['1QFIxqB5jCx6P6r92-5T-H_OnX4GUdKVI', '1sxHffw_Zg4LFWlGXvxCbFpyP0CA0lqbg', '1qRY0uTcQLZPRw_tw6cgblb9OVuSDmcTZ'],
        ['1wIag2Kk2bMv9kI6ymETe1syn_oLX-p4X', '1Nsj02tD7GAboE1o3x52_Z69t_1UM_h5j', '1lvFeePaU0osvM5R8FOC8hILFlguTkevz'],
        ['1poslZIiykmC4dKDlU-2TiC1KGRG32FWE', '10tgk4iQh4JivedmbmkMAGdqqZjvT4cff', '1_vr200_Uv35wuaWhwA0iSrYXqciUltfF'],
      ]),
      {
        systemInputsProcesses: comingSoon,
        implementation: driveFile('1_eHDA6wf5tCehbFuiGFgth2aVwKVYBb1'),
        outcomes: driveFile('1UX_-BNBmHrQ4FVulG89zsXb-8-qpBFhc'),
      },
      ...fileParameters([
        ['1fw4nyTW457ZoLomjfCoXICRGuIa7ZOsB', '1beXE3I-AxJ_y4vzd75ace6JdV6SDsnlR', '1e57t5FArpQoy9qdKulrl7CqBn2ccBKuy'],
        ['1u9AePOntjwVRqkb8swGZSxYxU_yfVz0q', '1Yd-KeKpf_n4m9wI8PsgotQ03YAqjLX6p', '1Z5oxVcKBAOqy6YuACdHJgsXPB-Y3nx6J'],
      ]),
    ],
  },
}
