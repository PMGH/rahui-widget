/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_TEST_ROOT_ELEMENT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
