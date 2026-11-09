// ================================================================
//  설정 파일 — 처음 한 번만 고치면 됩니다.
//  새 버전이 나오면 index.html / board.html / style.css 만 바꾸고 이 파일은 그대로 두세요.
// ================================================================
window.SLUSH_CONFIG = {
  // Apps Script를 "웹 앱"으로 배포하고 받은 주소를 따옴표 안에 붙여넣으세요.
  // 예) 'https://script.google.com/macros/s/AKfycb.../exec'
  API_URL: 'https://script.google.com/macros/s/AKfycbzW3GuQPoosyVvyjubMxSvTS3fJpkN3XsOITd60CS8T83dwzlq8EPnFhC_FmHt0bdM_/exec',

  // ── 부스 운영 계획판 연동 (운영 현황에 테이블 담당 명단이 나와요) ──
  // 계획판 config.js에 있는 SUPABASE_URL, SUPABASE_ANON_KEY 두 줄을 그대로 복사해 넣으세요.
  SUPABASE_URL: 'https://rbpofwlpfxnsicyoxkao.supabase.co',
  SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJicG9md2xwZnhuc2ljeW94a2FvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTEzMTU4NzgsImV4cCI6MjEwNjg5MTg3OH0.gpVo5qIJ2PelW0TjWQEEKmVglVOH8oSVKe1SPiikkM0',

  // (선택) 운영 현황 화면에 [부스 운영 계획판 열기] 버튼을 만들려면 계획판 주소를 넣으세요.
  PLAN_URL: ''
};
