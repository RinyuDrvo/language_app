# ディレクトリ構成

```
src
|--assets
|--components
|  |--atoms
|  |--molecules
|  |--organisms
|  |--pages
|--constants
|--models
|--router
|--service
|--store
|  |--modules
|--utils
|--views
```

| ディレクトリ名 | 役割 |
| -- | -- |
| assets | 静的ファイル・汎用CSS |
| components/atoms | これ以上分解できない最小単位の汎用コンポーネント |
| components/molecules | 一つの汎用的な部品を構成するコンポーネント |
| components/organisms | 一つの機能を構成するコンポーネント |
| components/pages | viewsから呼び出され、organismsを用いてページを構成するコンポーネント |
| constants | 定数定義 |
| models | 型定義 |
| router | Vue Routerの定義 |
| service | ビジネスロジック |
| store/modules | Vuexストアの定義 |
| utils | 汎用的なメソッド |
| views | ページ遷移のために使用する、ページ単位のコンポーネント |
