/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_IS_DEVELOPMENT: string;
  readonly VITE_TEST_ROOT_ELEMENT: string;
  readonly VITE_RAHUI_BOOKING_LOCAL_SERVER_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
