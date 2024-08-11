/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_IS_DEVELOPMENT: string;
  readonly VITE_TEST_ROOT_ELEMENT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
