const LogoIcon = () => {
  return (
    <svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" fill="none">
      {/* Camera-style rounded square frame */}
      <path
        d="
      M28 6
      H92
      C104 6 114 16 114 28
      V92
      C114 104 104 114 92 114
      H28
      C16 114 6 104 6 92
      V28
      C6 16 16 6 28 6
      Z
    "
        stroke="#FFFFFF"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Corner cutouts (camera frame feel) */}
      <path d="M18 6 V22" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" />
      <path d="M6 18 H22" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" />

      <path d="M102 6 V22" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" />
      <path d="M98 18 H114" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" />

      <path d="M6 102 H22" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" />
      <path d="M18 98 V114" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" />

      <path d="M98 114 V98" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" />
      <path d="M114 102 H98" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" />

      {/* Inner lens / swirl */}
      <path
        d="
      M60 34
      C46 34 36 44 36 58
      C36 72 46 82 60 82
      C74 82 84 72 84 58
      C84 44 74 34 60 34
      Z
    "
        stroke="#FFFFFF"
        strokeWidth="5"
      />

      <circle cx="60" cy="58" r="8" stroke="#FFFFFF" strokeWidth="5" />

      {/* Abstract inner drop shape */}
      <path
        d="
      M60 28
      C68 38 70 44 70 58
      C70 72 64 86 60 92
      C56 86 50 72 50 58
      C50 44 52 38 60 28
      Z
    "
        stroke="#FFFFFF"
        strokeWidth="4"
        fill="none"
      />
    </svg>
  )
}

export default LogoIcon
