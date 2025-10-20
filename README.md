# GRAPHQL-Tasks

Full-stack GraphQL ハンズオン用のリポジトリです。NestJS（バックエンド）と Vite + React（フロントエンド）を同じリポジトリで管理しています。

## プロジェクト構成

- `backend/` – NestJS を使った GraphQL API。Prisma を利用してデータベースとやり取りします。
- `frontend/` – Vite + React 製のクライアント。`@apollo/client` でバックエンドと通信します。

## バックエンドのセットアップ

```bash
cd backend
npm install
npm run start:dev
```

`http://localhost:3000/graphql` で GraphQL Playground が利用できます。

## フロントエンドのセットアップ

```bash
cd frontend
npm install
npm run dev
```

ブラウザで `http://localhost:5173/` にアクセスして動作を確認してください。

## そのほか

- `.env` やデータベースの初期化手順などは必要に応じて追加してください。
- Pull Request / Issue など歓迎です。
