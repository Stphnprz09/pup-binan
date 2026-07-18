export type AreaDocumentLinks = {
  selfSurvey: string
  programPerformanceProfile: string
  parameters: Array<{
    systemInputsProcesses: string
    implementation: string
    outcomes: string
  }>
}

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

export const bsitAreaDocumentLinks: Record<number, AreaDocumentLinks> = {
  1: {
    selfSurvey: driveFile('1ToAkmOYjt4pBFpDt0hY-TC5Xyd9MHpMP'),
    programPerformanceProfile: driveFile('1sIjEUhHn5Z0afv3qlfQT1dzqMNNQyW9L'),
    parameters: fileParameters([
      ['1mMv4DSPfok6EBFuT2qbqkiBg-aIiqfEe', '1z5rBFBiOIowowncyfPTEAphva3bYYrcV', '1dYUKGYB4fGwWU6IEZnxkODcic2oUpy_L'],
      ['119wzYh4Y4857O6YU8cSpeDnA3SjtffoC', '1Ds-xGLK-sTVe0kCJv-tAf5rNx_T3p7UM', '1WkEo6cO4irZzGMZBV_zZ2LZAy4K018uW'],
    ]),
  },
  2: {
    selfSurvey: driveFile('1myLb_WX20jI3dhUpQQLdD4iB4vLEWBQB'),
    programPerformanceProfile: driveFile('1lbmYM4hnGfLpHShCPsWhhdVeZ9Ch0ZCJ'),
    parameters: fileParameters([
      ['1LlJLkbiaMErLEw0X4JVRxicZh5mciTuM', '1A15MgE_-K6Ga-qfh2iT5iLfSO80u_jnN', '1UNxfgRIyH7AHCZm8zHkk8Lqu8t4pNNxq'],
      ['1YEliHY76uoe5tduGiusOwtYF3CKrH2QA', '12g4ZGQLsv16ZE5t_kgVpTy06Bph5rP2P', '1cz-ljf04M2BUU7Zyvga_0QevIOMdnXjV'],
      ['153Ojkh_P7rF185MUEuNfy7XPGBcRY-iZ', '11guO4TKTRk7nhg38iPPeza3NHJbSLKMY', '183743zR1q-biL0EwaC8F1Bd49McWC7DL'],
      ['1tq1VhWykA_LYUrLXM6-cPAbUMDt43igu', '1A-DtpU8ENYNGJHQc9KgmkqyL-OhfgX4J', '1M4zsZ7MGK0q0lZ8K3gwrt6itkYSN1cp2'],
      ['1e6m8xs8G3Ij1K-0jt5-MDCTSihxTRydO', '1LRLTSsTyd28dpW89HVE5tVBczsSUWKpz', '1E9uzz8ghLd05LNh2fDApkAtNbRZnev-7'],
      ['15N3ma_SmGanV3DkJgUrVsBTP5rMrTxIw', '1O_qDOix-BVkJTx-zPHC8WE0cQrQAX15-', '1NcAU3mKYUEpJB2SCRloiuV-Qsn8_U-b3'],
      ['1wEmP5_-3-lqUyQF1hJvQg-xFp6kLmdid', '1ThfUsZOuNBlA12e4ZrC0a4xE3X12CGKo', '15XoV_x5wsrwOAO0wTlaMszEdISOFB037'],
      ['1Hw5m4se-WZQ5MSjFjbxgP0qLS0ciUWQg', '1YbUY9HydiCeAva5p6x8o1__mA21_4xAA', '1W5RtjCwkSY1PmcLJQzyhs2IHrsvxbMZZ'],
    ]),
  },
  3: {
    selfSurvey: driveFile('19u1XKSSg3HtHcUzvp-Po63ETax0fVBsW'),
    programPerformanceProfile: driveFile('1xMLuXya4w8R93S_MQTjKxqHeTtt-I13P'),
    parameters: fileParameters([
      ['1DcXtD4b9KiuzCYRGgeOtg0_9jCJagRAa', '1ITsJV6x0AclYjBAVOG6fBgd5y62Wawwa', '1rhvfA0N7EZPAfRlbibvtaxfXcw-LMUBU'],
      ['1_HbQsaKLhbdKNnqB7mPY1DPkZHRFYdbI', '1VfHdY24yBt4DH3Utc9ElJBVO7yMmD-Mk', '1lGJMG50jOiNgly-6hTpDRh6utoguLzXL'],
      ['1S91SZuAkKrP3U2JtZt7PLJupkwBmOl02', '1Fj3ash2dsmaQtgOgv-5ueKNQinlT5dfS', '1PN06-SImDjV1KOqCq7sqX_h9LoAzFgZt'],
      ['1vXSF6De1z_Pcn9PBWeSmggVhntj90YCU', '1bGeVh1baDHzCBs83xbKHPsAYH459-4PK', '1dXSQLcEMKDdYaVWAUKz993rFAJCLdvIO'],
      ['1QJLYkIHxcF5t7v-xy4cgHAGA-n2nZxsV', '1TSO_DPgvit6oDkf1u2q-Y-XFTgbL1rH5', '1IAkcySZcPFPy79MHmz-eBQgkSu5qQKol'],
      ['1tghwoLwMcShNAtu4Q4ANubMRvwoQ1W-Y', '1PHd9CFvQWbWV7tiVRq7bQf6DGEWY8EMy', '1B_0jdyFu7_PmfeB99C0idqK7lwEY8T5a'],
    ]),
  },
  4: {
    selfSurvey: driveFile('1ADAQMBghMejB7iWS2Idq2Sk_TQfXKiNa'),
    programPerformanceProfile: driveFile('18ur-2oMAVK7j8_e55_4RvgITDuyUwNXl'),
    parameters: fileParameters([
      ['1sPLcIxDWFS0uaE2X2816IXTVlDTwcATF', '1HGKtaDNGDQQ1OnJWKAI7aQyR_JfcCbvi', '1W1dLoz3-CtqMXD8QoK4kGzlYmPoiDrtd'],
      ['1D3A7tR7q-9jNboMu07Q9cpvYskqvpRog', '1lxxYV9Ju40UtYxlxwn6WBZK3VEJouWbN', '1tBSFxX3jURXM31xdhfLLpoo9oyciRrEk'],
      ['15A3Un-GcSuAGtKwen_4MgSl800uvg3_S', '17c4xE7VKN6pLGQJgG-nleVm_SKKoZSVK', '1HyNUIIDBPVksHj-HZLxmOh7HbBT4c241'],
      ['1umyNUkMF5DWTN4ehBoz7McaKgSJ2LEDO', '1VVHa5viyoJI8EXHDI74KBeTWBfojFxTL', '1AD-DaOYNxmy77YimWy-nkGeEh7iaPmFY'],
      ['10X-sa8ANH04G9DZ_qqBgLrCWIc0IX38H', '136X8tQM2jUTyOK3LL7Vv0Vn5Q1GkRNUz', '1FJurBln7kdD5G5-39jqdIiTaH3QChb-H'],
    ]),
  },
  5: {
    selfSurvey: driveFile('18L1snKEp31nIyKJapj_cWLGWtOZrjKAW'),
    programPerformanceProfile: driveFile('1-p2o-2YxDRBKMDuEezR80yh13WHw6wxn'),
    parameters: fileParameters([
      ['1NPPOKlKmgVmjXq77Mdi1pKCtBJncGA3M', '1QT9875bPbaIvBlSMXmxGn1iW_Qgy0SEm', '1wCqKZGy-CsXXlMf53v2lRZyPbS7vvdWx'],
      ['1K9Uq6Vrin3Y2tK_mOezuaRNaybc6R8Zr', '1BZ6KUEbSbe9_zJ7SGU9wVBXMTt_A5qAP', '1acsYAJLDwjloqesGVvokN5p4eCFdJ_kT'],
      ['1-peHYDzN68yBUW1idcbMbbfItr41ekD9', '1NqC7GJ1pzQmCUrNs-3iop-hxbSe2Hies', '1lptgshIVjsjg_iAXDg6RM5x2Qakq3tHB'],
      ['1MrFf4OEdyavMbRBRjataw9Plv-Ih56nC', '1D96NBzTFzixoB1H4fBa4BS06GfysAoxr', '1U92aWWwc766xdY3eyXwSN-5SX9bIVzUH'],
    ]),
  },
  6: {
    selfSurvey: driveFile('1ua2jACwVUXr2p0BjxyuYkNdo1Rg7q4mh'),
    programPerformanceProfile: driveFile('1rg6iSGTPA0uWhZs6rZGvq6QLuYD-gZfD'),
    parameters: fileParameters([
      ['1LHHzQhlT-y2CrhgBkU33qnQN-5qlU4h8', '1Go8WllATrAVPKET4Ayfx8zj6Z7BA9wEv', '1uZbFGGsKRedTvpyKUfZZQ714FVIJqPbq'],
      ['1Orp3oYPeIydi0HJ0WOZMGgEd-ZOGDNm2', '1OWUtMFoDAWdEqAWGCqRP8JuhyzQWGu6L', '1elshCQ4AXJS1NytHU8AhJNr5IdrtCAFX'],
      ['19Vej_cwpa7bRsJdYYVoQeX2wp5WE4ClY', '1eyK1ZHtV1DPThiFP3J43_NSU9_aMh--3', '1vd1T0OBUUJWYU9651AYaLGxbFnvqJgYg'],
      ['1y1g552ckWN39ouhuzp96wxMEJnr4ykgX', '1-djF-0GM24oWOIWgqhYNKZhnW7NzPhW-', '1NoY0iBHanxBAn41n8pTxBsg-P47dP7m9'],
    ]),
  },
  7: {
    selfSurvey: driveFile('1CZwZG4gBUT4rBZY8FUNUnt_pb5KgpZVa'),
    programPerformanceProfile: driveFile('1PK7DqIUJjRc2sqHsDBzLYogHMOh52XUe'),
    parameters: fileParameters([
      ['1B4dmXW6Fi9iDIPTDSC_Dxfrtwj1iThH1', '1oSqFWgFn0lQ5Q8Mw7upSJCluLocq0QGP', '1n0sEHKJb2MaaAs2vIUOWH1jJPMG_u9p3'],
      ['1UoaDLvYZul7Z0gEm8DFJCmlzNvLDRmXf', '1k54e4icWBmMDHf3f21W2TzILpPxwPfAf', '1jWYjjYAICWfPrClvEFAZKesErq1Nv_eM'],
      ['1S9GJoPg8XRKVErFwkDs8vv8EANbP1yBM', '1oApbt_ahVkBhStBUbUZIn620P0Ilt54E', '1EmFqE29Y-c2DIuJoCkIDOJ_HFT5ef2Wx'],
      ['1vd4OPtxuFTBUg09fOZ1tY5eWy7-XFrKI', '1CPCeSgpmVxAxqyM7uUPprVZMUzDeYVg6', '13KSOGiDPmZ-OsPwFMocqDoJiukJrofNm'],
      ['1fdjxqpz2bPK3KnTc2xnmZ2CYLzjJbXyQ', '1RjMKvq8CF0PDYJZvF5khfr_mPq-DvA-6', '1gc2CnrhqbnAeb0NeHwzDFM9r65ZNpcHd'],
      ['16-3aKA_b_-IG0aYXhU5sqwtqw5zinN-g', '1r8IcdF2a337kdPGn4OlakFMh9NqJRZwe', '17oA4EWnjsvIHODw5BM-xpE4WBioB2nXz'],
      ['1eCuV8GtL4KWPkp5NgKI6J3sqbAMT8Bdv', '1HRQzmWYCzMI3-prCtSqhv1RAh-OeSIR7', '11-iO89gmvw-4mGZdfD9vXZObJ5lDagvj'],
    ]),
  },
  8: {
    selfSurvey: driveFile('1c0zEAuQHjPj22qwxe9MKhH5E-3fQP33O'),
    programPerformanceProfile: driveFile('1ZX9ssHswAUuJcUCXaobKHi3gubrvymF4'),
    parameters: folderParameters([
      ['1c321Luq_8DFb3oLkH4a6AbH1j8ZKdpBS', '1CQqXjC8YEvIwzCHAvAuoH0iFkUno8Uoy', '1nIqCq3bU8q7oBkwVrzIt_qjov-jYB0YN'],
      ['15OXqRs-IzM1OFgQLxoUzUdwfCF87gPxq', '1fL4Vz9PCfgCf0bWv55XLcoANDh0UJFFO', '1NW12qRcjTFgrgd9GNBsMTq2kmNmEXusC'],
      ['1U5AZKZ1cPY_CMIiU225c1nqGEKJMEolX', '1OktZ4oaUBrOX1scY1XL1ZboI_G2HkWyR', '1boVchqiEs3WfhiDcxLaQXdzjYvGMv9I7'],
      ['1LGPtR3OZaeOKyO65MbS72EgLcusKJ3Sa', '1KRo8sTFw5-e58cTn0sw0ebYQG9jNvBPF', '13551ie9OjA8udXSaGAqqzi8ftzND1PkJ'],
      ['1j-hSOxn85Cphzu8hmyavOwMEdAl4d2V9', '1p97PMowq9NnCcFsbqa22t1NQ85lHGKsN', '1fHF2Kw2PbzAgovJNYRE_AhuLKL6P_GC5'],
      ['15PknCNo1yeHZmi4Ap0AnDOxOpejyLLlb', '1iv0seZNfLJjonrExK7eKOyd5OCh_ToLE', '1q4UVOYHvdou00W3xe-3MHJQZLy179wSk'],
      ['1IRgjtZqLJcBGTj8y6ERkD4JZ1sUE6n_T', '1qTo9L0cUi9OP4UFmlcG8UCvcdd6kfnqT', '1VFECWxtsIVFRuPnVrk2Dm4Lh2Dt1-8Jy'],
      ['1koDiEy3rAEdRk-6deB-y2VbLzuDDkDzR', '10BvWr2ti-zMVk9KT_cykUAM2xOiuAQeR', '1pM-T1_sUO-uAH39Ox-Gi_WmyT4R8Qq9c'],
      ['1kLM7-w6eKk30WrRWW_72zj2uhKuFGSmw', '1JYAuy2WTbDze0_4Kt1QbUo8Snrvw-wZO', '1SjDZV00Br1OKPtp8Z9GzsaLYnK8PzROr'],
      ['1bOhGIYXhHkNLeV8DuRWLd1H_Mli_MWq-', '1WXULPxxZOndmK3vxl-iDObxxZwB4EN22', '1Z_kdm77FHA9H9-bFgxv9UxMJ710o-z3O'],
    ]),
  },
  9: {
    selfSurvey: driveFile('12UlVpZpzuGvB9sqWbnNn9xY7itxIvgg-'),
    programPerformanceProfile: driveFile('1HtWL8JajlNPPDmPDcuvSISqpduqY5HSv'),
    parameters: fileParameters([
      ['10q2kftIbc7lzDjYlTkzflvzCn051n4Tc', '1j_aLUfaFcAY7VkR-rPZqfbGT6c1_QUvN', '1zThR1eLL_xBr-FG3b-ljhLRA3efapUKM'],
      ['1yYLfljJx77BcRV-3hdZW1Vzgy5sSZv2s', '13yZGnACoO5lzh1pBBp0tJZbswXkoFvtG', '1KlhrdtFcHViHdt6f3pYl6lgX_b68Jd5M'],
      ['1SYs7bVtIaM35iefj-Ygilyn-sfYVQcw4', '1QFIMu6s21T5W6Uf61NwGnzBuMFvCxpIc', '1nMY_wtoSNLOV-6Sp5UutV_PgBaSTl6rN'],
      ['1u_wCah8z1KqRKh2ouEQhVrv6_GEcS2Ev', '13cboRoLrvxN2ktzF5VgsnwM6ugauuiuW', '16TE-S7zjbW-nEqm9OuaU6vJFZq5eANLO'],
    ]),
  },
  10: {
    selfSurvey: driveFile('15oQQgH3GIEhGEWX15dAxR0AMc6fWGTu_'),
    programPerformanceProfile: driveFile('1juMuHoeOag4OMdpjwEeQ8QaLAUEwGQcd'),
    parameters: fileParameters([
      ['1rIMXOPgnrrU97KVlGZucZpRZYOnke25y', '179Ht_TSx9OkfSH7uwkqZbrSED-0F4Kuy', '18GnLvWsLQ5SvDEZXUtLm1K_C-IqNz49Q'],
      ['1qxtmNrAABkbdKqPg2gOLbAeu-SUE_6Vx', '1NVaKq3ZOoM69gpA7L7ktJg6VTbbEZJH4', '1UsY0ovpivjKAdpSFlC51xD-IP0OQj6kN'],
      ['1rv8v0mrKdE_89D5z6D420UG_Tr5F8mbk', '1GKlHosavojBA3qPVo29aSRw1zR_rkZN7', '1_kUR_841heZz85rDoOCTAsqzSuh4Oo0j'],
      ['1f7LM5kyNSuTa-DTehqqtfI-ooHrZMB36', '1a_prI0NDisg0oCYdgRsq5x7xoctJFtPP', '1Z3mrUqO5T-5VCktCzaTBczU5Nrjf8E-S'],
      ['1jCraJZ0_Ol0biEo1XXCPl7yF7Cw0me0U', '1fvcFgDUZKl983hoXGLXQIGAEml_imBQ1', '1JmMUulCQkGxpGYf3n-uZ8t812sTvRjGR'],
      ['1LkFwdWxvOSFkT5pODtFe3-ec942bGHeb', '16q5lbvn3MP7ayRMTbcynXep0J2bVnL6a', '1z-JjdO_gcab_cwQgGRE3hOe6ej3EnNjF'],
      ['1PD3f-GNN2ssgHmogFZ0W4grhd12l0nIG', '1_gKBGWu4uA9Si4hg_a_M96UcVirsc3se', '1IxVKoYWUwTKZzOGvPU76zUZXFwVjVj0_'],
      ['13VVAG4YGHGUpla4e7309jCSI60hhT5O7', '1yYmRJYcpGs1FKqLYr2jdwzq8z_Q2JQfT', '1BSwyRPpSaYuEZNc2lVJbBpGhkXjZN2R4'],
    ]),
  },
}
