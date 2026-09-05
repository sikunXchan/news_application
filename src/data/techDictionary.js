// Comprehensive Tech & General English Dictionary Database
// Provides instant offline lookups for tech terms, programming vocabulary, and common news words.

export const techDictionary = {
  // A
  "agent": {
    word: "agent",
    phonetic: "/ˈeɪ.dʒənt/",
    partOfSpeech: "noun",
    meaning: "代理人、仲介者、自律エージェント",
    techContext: "AIや自律システムにおいて、環境を認識し目標達成のために自律的に意思決定・行動を実行するプログラム（AI Agent）。",
    example: "Autonomous AI agents can write, test, and deploy code independently."
  },
  "algorithm": {
    word: "algorithm",
    phonetic: "/ˈæl.ɡə.rɪ.ðəm/",
    partOfSpeech: "noun",
    meaning: "アルゴリズム、計算手順、処理手順",
    techContext: "特定の問題を解決したり計算を行うための明確に定義された一連の手順やルール。",
    example: "The search algorithm was optimized to reduce latency."
  },
  "allocate": {
    word: "allocate",
    phonetic: "/ˈæl.ə.keɪt/",
    partOfSpeech: "verb",
    meaning: "割り当てる、配分する",
    techContext: "メモリやCPUリソース、ストレージなどをプロセスやコンテナに割り振ること（Memory Allocation）。",
    example: "The OS dynamically allocates memory to running processes."
  },
  "architecture": {
    word: "architecture",
    phonetic: "/ˈɑː.kɪ.tek.tʃər/",
    partOfSpeech: "noun",
    meaning: "構造、建築、基本設計",
    techContext: "ソフトウェアやシステムの全体的な構造・構成設計（例: Microservices, Event-driven architecture, Clean architecture）。",
    example: "We transitioned our monolithic architecture to microservices."
  },
  "array": {
    word: "array",
    phonetic: "/əˈreɪ/",
    partOfSpeech: "noun",
    meaning: "配列、整列",
    techContext: "同一型のデータを連続したメモリ領域に順序立てて格納する基本的なデータ構造。",
    example: "The method returns an array of unique user IDs."
  },
  "asynchronous": {
    word: "asynchronous",
    phonetic: "/eɪˈsɪŋ.krə.nəs/",
    partOfSpeech: "adjective",
    meaning: "非同期の、同時に発生しない",
    techContext: "処理の完了を待たずに次の処理を実行する方式（async/await, Promise, Event Loop）。",
    example: "Asynchronous JavaScript allows UI to remain responsive during network calls."
  },
  "authenticate": {
    word: "authenticate",
    phonetic: "/ɔːˈθen.tɪ.keɪt/",
    partOfSpeech: "verb",
    meaning: "認証する、真正性を証明する",
    techContext: "ユーザーやシステムが主張する身元（Identity）が正しいかを確認・検証すること（JWT, OAuth, MFA）。",
    example: "Users authenticate using multi-factor authentication (MFA)."
  },

  // B
  "backend": {
    word: "backend",
    phonetic: "/ˈbæk.end/",
    partOfSpeech: "noun",
    meaning: "バックエンド、サーバー側システム",
    techContext: "データベース、サーバーロジック、APIなど、ユーザーから直接見えないサーバー側の処理領域。",
    example: "The backend is built with Node.js and PostgreSQL."
  },
  "bandwidth": {
    word: "bandwidth",
    phonetic: "/ˈbænd.wɪdθ/",
    partOfSpeech: "noun",
    meaning: "帯域幅、データ転送能力",
    techContext: "ネットワークや通信回線で一定時間に転送できる最大データ量。転じてエンジニアの「作業の余裕・キャパシティ」を指すことも。",
    example: "Streaming high-resolution video requires significant network bandwidth."
  },
  "benchmark": {
    word: "benchmark",
    phonetic: "/ˈbentʃ.mɑːk/",
    partOfSpeech: "noun / verb",
    meaning: "性能指標、ベンチマークテストを行う",
    techContext: "ハードウェアやソフトウェアの処理速度・性能・効率を標準的なテストで測定・比較すること。",
    example: "The new M-series chip set a new record in AI benchmark tests."
  },
  "bottleneck": {
    word: "bottleneck",
    phonetic: "/ˈbɒt.əl.nek/",
    partOfSpeech: "noun",
    meaning: "ボトルネック、隘路、性能の制限要因",
    techContext: "システム全体の性能やスループットを制限・低下させている特定の箇所（データベースI/O、ネットワーク遅延など）。",
    example: "Database queries became the primary bottleneck during flash sales."
  },
  "breach": {
    word: "breach",
    phonetic: "/briːtʃ/",
    partOfSpeech: "noun / verb",
    meaning: "侵害、違反、突破する",
    techContext: "セキュリティ侵害、データ漏洩（Data Breach）。不正アクセスによって機密情報が流出すること。",
    example: "The security breach exposed over 10 million user credentials."
  },
  "buffer": {
    word: "buffer",
    phonetic: "/ˈbʌf.ər/",
    partOfSpeech: "noun",
    meaning: "バッファ、一時記憶領域、緩衝材",
    techContext: "データ転送速度の差を吸収するために、データを一時的に保持しておくメモリ領域。",
    example: "Video players buffer several seconds of footage to prevent stuttering."
  },

  // C
  "cache": {
    word: "cache",
    phonetic: "/kæʃ/",
    partOfSpeech: "noun / verb",
    meaning: "キャッシュ、一時保存領域、キャッシュする",
    techContext: "頻繁にアクセスされるデータを高速なメモリに一時保存し、再取得の処理時間と負荷を削減する仕組み（Redis, CDN cache, Browser cache）。",
    example: "We cache the API responses in Redis to improve response times."
  },
  "compile": {
    word: "compile",
    phonetic: "/kəmˈpaɪl/",
    partOfSpeech: "verb",
    meaning: "コンパイルする、編集する",
    techContext: "人間が書いたソースコードをコンピュータが実行可能な機械語や中間コードに一括変換すること。",
    example: "TypeScript compiles down to vanilla JavaScript before running in the browser."
  },
  "concurrency": {
    word: "concurrency",
    phonetic: "/kənˈkʌr.ən.si/",
    partOfSpeech: "noun",
    meaning: "並行性、同時実行性",
    techContext: "複数の処理が重なり合って同時に進行する性質（マルチスレッド、コルーチン、Goroutineなど）。",
    example: "Go language is renowned for its elegant handling of concurrency."
  },
  "container": {
    word: "container",
    phonetic: "/kənˈteɪ.nər/",
    partOfSpeech: "noun",
    meaning: "コンテナ、入れ物",
    techContext: "アプリケーションとその実行に必要なライブラリ等をパッケージ化し、OS上で隔離して軽量に実行する技術（Docker, OCI）。",
    example: "Kubernetes orchestrates and scales Docker containers across a cluster."
  },
  "context": {
    word: "context",
    phonetic: "/ˈkɒn.tekst/",
    partOfSpeech: "noun",
    meaning: "文脈、背景、コンテキスト",
    techContext: "1) ReactのContext API: プロップスのバケツリレーなしに全コンポーネント間で状態を共有する機能。2) LLMのコンテキストウィンドウ: モデルが一度に理解・参照できるトークン数の範囲。",
    example: "Gemini 1.5 Pro features an unprecedented 2-million token context window."
  },
  "credential": {
    word: "credential",
    phonetic: "/krəˈden.ʃəl/",
    partOfSpeech: "noun",
    meaning: "資格証明、認証情報",
    techContext: "ユーザーID、パスワード、APIトークン、秘密鍵など、本人認証や認可に必要な機密情報。",
    example: "Never commit API credentials or secrets into public git repositories."
  },

  // D
  "debugger": {
    word: "debugger",
    phonetic: "/diːˈbʌɡ.ər/",
    partOfSpeech: "noun",
    meaning: "デバッガー、バグ修正ツール",
    techContext: "プログラムの実行を一行ずつ追跡（ステップ実行）し、変数の状態を検査して不具合を特定・修正する開発ツール。",
    example: "Set a breakpoint in the debugger to inspect variable values at runtime."
  },
  "dependency": {
    word: "dependency",
    phonetic: "/dɪˈpen.dən.si/",
    partOfSpeech: "noun",
    meaning: "依存関係、依存ライブラリ",
    techContext: "プログラムが動作するために依存している外部パッケージやモジュール（npm packages, pip modules等）。",
    example: "Run `npm audit` to check for security vulnerabilities in dependencies."
  },
  "deprecated": {
    word: "deprecated",
    phonetic: "/ˈdep.rə.keɪ.tɪd/",
    partOfSpeech: "adjective",
    meaning: "非推奨の、廃止予定の",
    techContext: "より新しい代替手段が登場したため使用が推奨されず、将来のバージョンで削除予定となっているAPIや機能。",
    example: "This legacy API method is deprecated and will be removed in v3.0."
  },
  "deployment": {
    word: "deployment",
    phonetic: "/dɪˈplɔɪ.mənt/",
    partOfSpeech: "noun",
    meaning: "デプロイ、配置、本番環境への展開",
    techContext: "開発・テストしたコードやビルド成果物を本番サーバーやクラウド環境に反映して利用可能にすること（CI/CD）。",
    example: "Automated CI/CD pipelines enable zero-downtime deployment."
  },

  // E
  "encryption": {
    word: "encryption",
    phonetic: "/ɪnˈkrɪp.ʃən/",
    partOfSpeech: "noun",
    meaning: "暗号化",
    techContext: "データを特定の暗号鍵なしでは解読できない形式に変換し、第三者による盗聴や改ざんを防ぐ技術（AES, RSA, TLS）。",
    example: "End-to-end encryption ensures only the sender and recipient can read the message."
  },
  "endpoint": {
    word: "endpoint",
    phonetic: "/ˈend.pɔɪnt/",
    partOfSpeech: "noun",
    meaning: "エンドポイント、終点",
    techContext: "Web APIにおいて、クライアントがHTTPリクエストを送信して特定のリソースや機能にアクセスするためのURL。",
    example: "Send a POST request to the `/api/v1/auth/login` endpoint."
  },
  "execute": {
    word: "execute",
    phonetic: "/ˈek.sɪ.kjuːt/",
    partOfSpeech: "verb",
    meaning: "実行する、遂行する",
    techContext: "プログラムコード、スクリプト、SQLクエリ、またはOSコマンドをコンピュータ上で処理・動作させること。",
    example: "The runner executes the automated test suite on every pull request."
  },

  // F
  "framework": {
    word: "framework",
    phonetic: "/ˈfreɪm.wɜːk/",
    partOfSpeech: "noun",
    meaning: "フレームワーク、枠組み",
    techContext: "アプリケーション開発の土台となる構造や共通機能を提供する基盤ソフトウェア（Next.js, Django, Spring Boot, Flutter）。",
    example: "React is a UI library, whereas Next.js is a full-stack React framework."
  },
  "frontend": {
    word: "frontend",
    phonetic: "/ˈfrʌnt.end/",
    partOfSpeech: "noun",
    meaning: "フロントエンド、クライアント側",
    techContext: "Webブラウザやモバイル端末で動作し、ユーザーが直接操作・視覚的に対話するUI/UX部分。",
    example: "Modern frontend development heavily utilizes TypeScript and component-based UI."
  },

  // G / H
  "garbage collection": {
    word: "garbage collection",
    phonetic: "/ˈɡɑː.bɪdʒ kəˈlek.ʃən/",
    partOfSpeech: "noun",
    meaning: "ガベージコレクション、メモリ自動解放",
    techContext: "プログラムが使用しなくなった不要なメモリ領域を自動的に検出して解放するメモリ管理機能（GC）。",
    example: "JavaScript engines handle memory management automatically via garbage collection."
  },
  "hydrate": {
    word: "hydrate",
    phonetic: "/ˈhaɪ.dreɪt/",
    partOfSpeech: "verb",
    meaning: "水和させる、潤す、ハイドレーションする",
    techContext: "【Web開発】サーバー側で事前レンダリング（SSR）された静的HTMLに対し、クライアント側でJavaScriptを実行してイベントリスナーやStateを結合し、動的に操作可能にすること。",
    example: "React hydrates the server-rendered HTML markup to make it fully interactive."
  },
  "heuristic": {
    word: "heuristic",
    phonetic: "/hjʊəˈrɪs.tɪk/",
    partOfSpeech: "adjective / noun",
    meaning: "ヒューリスティックな、経験則に基づく、発見的手法",
    techContext: "完全な最適解ではなくても、実用的に十分な近似解を素早く見つけるための経験的・推論的な探索アルゴリズム。",
    example: "Heuristic search algorithms enable chess engines to evaluate millions of positions."
  },

  // I
  "immutable": {
    word: "immutable",
    phonetic: "/ɪˈmjuː.tə.bəl/",
    partOfSpeech: "adjective",
    meaning: "不変の、変更不可能な",
    techContext: "一度作成された後に内部の状態や値を直接変更できないデータ構造。関数型プログラミングやReactのState管理で極めて重要。",
    example: "In Redux, state updates must be treated as immutable objects."
  },
  "infrastructure": {
    word: "infrastructure",
    phonetic: "/ˈɪn.frəˌstrʌk.tʃər/",
    partOfSpeech: "noun",
    meaning: "インフラ、基盤、基幹施設",
    techContext: "サーバー、ネットワーク、クラウド基盤、ストレージなど、システムを稼働させるための物理・仮想基盤（Infrastructure as Code / Terraform）。",
    example: "Cloud infrastructure is managed as code using Terraform and Ansible."
  },
  "interface": {
    word: "interface",
    phonetic: "/ˈɪn.tə.feɪs/",
    partOfSpeech: "noun",
    meaning: "インターフェース、接点、境界面",
    techContext: "1) UI: ユーザーとコンピュータの接点。2) API: システム間の接続仕様。3) TypeScript/OOP: クラスやオブジェクトが実装すべきメソッドや型の契約・定義。",
    example: "Define a TypeScript interface to enforce the shape of API responses."
  },
  "iteration": {
    word: "iteration",
    phonetic: "/ˌɪt.ərˈeɪ.ʃən/",
    partOfSpeech: "noun",
    meaning: "反復、繰り返し、イテレーション",
    techContext: "1) ループ処理で配列等の要素を順に走査すること。2) アジャイル開発における開発サイクル（スプリント）。",
    example: "Each two-week iteration produces a working increment of the software."
  },

  // L / M
  "latency": {
    word: "latency",
    phonetic: "/ˈleɪ.tən.si/",
    partOfSpeech: "noun",
    meaning: "レイテンシ、遅延時間、待ち時間",
    techContext: "リクエストを送信してから最初の応答データが返ってくるまでの遅延時間。低遅延（Low latency）はリアルタイム処理で必須。",
    example: "Edge computing significantly reduces network latency for global users."
  },
  "legacy": {
    word: "legacy",
    phonetic: "/ˈleɡ.ə.si/",
    partOfSpeech: "adjective / noun",
    meaning: "レガシーな、旧式の、遺産",
    techContext: "過去に導入された古い技術・設計・コードベースで、保守が困難だが現在も稼働しているシステム（Legacy Code）。",
    example: "The team is refactoring the legacy codebase to a modern React stack."
  },
  "middleware": {
    word: "middleware",
    phonetic: "/ˈmɪd.əl.weər/",
    partOfSpeech: "noun",
    meaning: "ミドルウェア、中間処理モジュール",
    techContext: "OSとアプリの間、またはWebリクエスト受信から最終ハンドラまでの間で共通の処理（認証、ログ、CORSなど）を行う中間ソフトウェア。",
    example: "Express middleware intercepts requests to verify authentication tokens."
  },
  "monolith": {
    word: "monolith",
    phonetic: "/ˈmɒn.ə.lɪθ/",
    partOfSpeech: "noun",
    meaning: "モノリス、一枚岩、単一体",
    techContext: "UI、ビジネスロジック、DBアクセスなど全機能が1つの巨大なコードベースと単一バイナリで構築されたシステム構成。",
    example: "Migrating from a monolith to microservices requires careful domain splitting."
  },

  // O / P
  "open-source": {
    word: "open-source",
    phonetic: "/ˌoʊ.pənˈsɔːrs/",
    partOfSpeech: "adjective",
    meaning: "オープンソースの、公開された",
    techContext: "ソースコードが一般に無償公開され、誰でも閲覧・改変・再配布が許可されたソフトウェアやモデル（OSS, MIT/Apache License）。",
    example: "Meta released Llama 3 as an open-source large language model."
  },
  "optimize": {
    word: "optimize",
    phonetic: "/ˈɒp.tɪ.maɪz/",
    partOfSpeech: "verb",
    meaning: "最適化する、効率化する",
    techContext: "コードの実行速度、メモリ使用量、バンドルサイズ、レンダリング回数などを改善して性能を最大化すること。",
    example: "Optimize bundle size by utilizing tree shaking and code splitting."
  },
  "orchestration": {
    word: "orchestration",
    phonetic: "/ˌɔː.kɪˈstreɪ.ʃən/",
    partOfSpeech: "noun",
    meaning: "オーケストレーション、統合管理、編成",
    techContext: "複数のコンテナ、マイクロサービス、クラウドワークフローのデプロイや死活監視、自動スケーリングを統合制御すること（Kubernetes）。",
    example: "Kubernetes simplifies container orchestration across hybrid cloud environments."
  },
  "pipeline": {
    word: "pipeline",
    phonetic: "/ˈpaɪp.laɪn/",
    partOfSpeech: "noun",
    meaning: "パイプライン、一連の処理経路",
    techContext: "1) CI/CDパイプライン: ビルド・テスト・デプロイを自動実行する一連の流れ。2) データパイプライン: データの収集・加工・保存の自動処理フロー。",
    example: "The CI/CD pipeline runs unit tests before deploying to production."
  },
  "polymorphism": {
    word: "polymorphism",
    phonetic: "/ˌpɒl.iˈmɔː.fɪ.zəm/",
    partOfSpeech: "noun",
    meaning: "多様性、ポリモーフィズム",
    techContext: "オブジェクト指向言語において、異なるクラスのオブジェクトが同じメソッド呼び出しに対してそれぞれ異なる固有の振る舞いをする能力。",
    example: "Polymorphism allows treating different UI components through a uniform interface."
  },

  // Q / R
  "query": {
    word: "query",
    phonetic: "/ˈkwɪə.ri/",
    partOfSpeech: "noun / verb",
    meaning: "問い合わせ、クエリ、照会する",
    techContext: "データベースや検索エンジンに対して特定条件のデータを抽出・操作するための指示文（SQL, GraphQL query）。",
    example: "Use indexed columns to speed up complex SQL queries."
  },
  "queue": {
    word: "queue",
    phonetic: "/kjuː/",
    partOfSpeech: "noun / verb",
    meaning: "キュー、待ち行列、先入れ先出し(FIFO)",
    techContext: "最初に入れた要素が最初に取り出されるデータ構造（FIFO）。非同期ジョブキュー（RabbitMQ, SQS, Redis Bull）として重宝。",
    example: "Background email sending tasks are pushed into a message queue."
  },
  "refactor": {
    word: "refactor",
    phonetic: "/riːˈfæk.tər/",
    partOfSpeech: "verb",
    meaning: "リファクタリングする、構造を改善する",
    techContext: "ソフトウェアの外部から見た振る舞いを変えずに、内部構造を整理して可読性、保守性、拡張性を高めること。",
    example: "We refactored the legacy component to use modern React hooks."
  },
  "repository": {
    word: "repository",
    phonetic: "/rɪˈpɒz.ɪ.tər.i/",
    partOfSpeech: "noun",
    meaning: "リポジトリ、保管庫、貯蔵所",
    techContext: "ソースコードや変更履歴、コミットログをバージョン管理システム（Git/GitHub）で一元管理する保存場所。",
    example: "Clone the GitHub repository to your local development machine."
  },
  "reentrancy": {
    word: "reentrancy",
    phonetic: "/riːˈen.trən.si/",
    partOfSpeech: "noun",
    meaning: "再入可能性、リエントランシー",
    techContext: "並行処理やスマートコントラクトにおいて、関数が実行途中で中断され、完了前に再度同じ関数が呼び出されても安全に動作する性質。",
    example: "The DAO hack exploited a reentrancy vulnerability in smart contracts."
  },
  "resilient": {
    word: "resilient",
    phonetic: "/rɪˈzɪl.jənt/",
    partOfSpeech: "adjective",
    meaning: "回復力のある、弾力的な、耐障害性のある",
    techContext: "システムの一部に障害やネットワーク切断が発生しても、サービス全体が停止せず自動復旧する耐障害性（Resilience）。",
    example: "Design resilient cloud architectures with auto-healing and fallback strategies."
  },

  // S
  "scalability": {
    word: "scalability",
    phonetic: "/ˌskeɪ.ləˈbɪl.ə.ti/",
    partOfSpeech: "noun",
    meaning: "拡張性、スケーラビリティ",
    techContext: "ユーザー数やアクセス負荷が増加した際に、サーバー増強（スケールアウト/アップ）によって処理能力を柔軟に拡張できる能力。",
    example: "Serverless architectures offer effortless horizontal scalability."
  },
  "schema": {
    word: "schema",
    phonetic: "/ˈskiː.mə/",
    partOfSpeech: "noun",
    meaning: "スキーマ、構造定義、図式",
    techContext: "データベーステーブルの構造（列名、データ型、制約）や、JSON/GraphQLなどのデータ構造の厳格な定義（Zod, Prisma schema）。",
    example: "Update the Prisma schema to add the new `userPreferences` table."
  },
  "stateless": {
    word: "stateless",
    phonetic: "/ˈsteɪt.ləs/",
    partOfSpeech: "adjective",
    meaning: "ステートレスな、状態を保持しない",
    techContext: "各リクエストが過去のリクエスト履歴に依存せず、単体で完結する通信設計（REST API, HTTP protocol）。スケーリングが容易。",
    example: "Stateless REST APIs make horizontal scaling across multiple servers trivial."
  },
  "stochastic": {
    word: "stochastic",
    phonetic: "/stəˈkæs.tɪk/",
    partOfSpeech: "adjective",
    meaning: "確率論的な、確率的な",
    techContext: "【AI/機械学習】乱数や確率分布に基づいて動作し、同一の入力に対しても確率的に異なる出力を生成する性質（Stochastic Gradient Descent / LLMサンプリング）。",
    example: "LLMs generate responses via stochastic token sampling governed by temperature."
  },
  "syntax": {
    word: "syntax",
    phonetic: "/ˈsɪn.tæks/",
    partOfSpeech: "noun",
    meaning: "構文、シンタックス、文法",
    techContext: "プログラミング言語においてコードが正しく解釈されるために従うべき厳密な記述規則。",
    example: "A missing semicolon caused a syntax error in the script."
  },

  // T / U / V / W
  "throughput": {
    word: "throughput",
    phonetic: "/ˈθruː.pʊt/",
    partOfSpeech: "noun",
    meaning: "スループット、単位時間あたりの処理能力",
    techContext: "ネットワークやサーバーが単位時間（例: 1秒間）あたりに処理・転送できるデータ量やリクエスト数（RPS / QPS）。",
    example: "Kafka is optimized for high-throughput, real-time event streaming."
  },
  "token": {
    word: "token",
    phonetic: "/ˈtəʊ.kən/",
    partOfSpeech: "noun",
    meaning: "トークン、標識、代用通貨",
    techContext: "1) LLM: 文章を形態素・サブワード単位に分割した最小の処理単位。2) 認証: アクセス権限を証明する暗号化文字列（JWT token）。",
    example: "The model was trained on over 15 trillion tokens of multilingual text."
  },
  "truncate": {
    word: "truncate",
    phonetic: "/trʌŋˈkeɪt/",
    partOfSpeech: "verb",
    meaning: "切り詰める、先端や末尾を切り捨てる",
    techContext: "文字列やデータ列が許容長を超えた場合に末尾を切り落とす処理（例: CSS `text-overflow: ellipsis`, SQL `TRUNCATE TABLE`）。",
    example: "Long article previews are truncated after three lines of text."
  },
  "vulnerability": {
    word: "vulnerability",
    phonetic: "/ˌvʌl.nər.əˈbɪl.ə.ti/",
    partOfSpeech: "noun",
    meaning: "脆弱性、セキュリティ上の弱点",
    techContext: "悪意のある攻撃者によって悪用（Exploit）される恐れがあるシステムやプログラムの欠陥やセキュリティホール（CVE）。",
    example: "The security patch fixes a critical zero-day vulnerability in the kernel."
  },
  "webhook": {
    word: "webhook",
    phonetic: "/ˈweb.hʊk/",
    partOfSpeech: "noun",
    meaning: "ウェブフック、イベント通知用HTTPコールバック",
    techContext: "外部サービスで特定のイベント（例: 決済完了、Gitプッシュ）が発生した瞬間に、指定したURLへ自動的にHTTP POST通知を送る仕組み。",
    example: "Stripe sends a webhook notification as soon as a payment succeeds."
  },
  "hijack": {
    word: "hijack",
    phonetic: "/ˈhaɪ.dʒæk/",
    partOfSpeech: "verb / noun",
    meaning: "乗っ取る、不正に乗っ取ること",
    techContext: "通信セッションやDNS、ドメイン、アカウントなどの制御権を攻撃者が不正に奪取すること（Session Hijacking, DNS Hijacking）。",
    example: "Attackers hijacked the DNS records to redirect users to a malicious phishing site."
  },
  "subscriber": {
    word: "subscriber",
    phonetic: "/səbˈskraɪ.bər/",
    partOfSpeech: "noun",
    meaning: "購読者、加入者、受信者",
    techContext: "Pub/Sub（Publish/Subscribe）パターンにおいて、特定のトピックやイベントを購読してメッセージを受け取るコンポーネント。",
    example: "The event bus dispatches messages to all registered subscribers."
  },
  "parameter": {
    word: "parameter",
    phonetic: "/pəˈræm.ɪ.tər/",
    partOfSpeech: "noun",
    meaning: "パラメータ、引数、媒介変数",
    techContext: "1) 関数定義が受け取る変数名（実引数はargument）。2) 機械学習モデルが学習によって最適化する重み・バイアス等の内部数値（例: 70B parameter model）。",
    example: "Large language models often contain hundreds of billions of parameters."
  },
  "inference": {
    word: "inference",
    phonetic: "/ˈɪn.fər.əns/",
    partOfSpeech: "noun",
    meaning: "推論、推論実行",
    techContext: "学習済み機械学習モデルに新しい未知のデータを入力し、予測結果やテキストを生成・出力するフェーズ。",
    example: "Model quantization significantly speeds up inference on consumer GPUs."
  },
  "quantization": {
    word: "quantization",
    phonetic: "/ˌkwɒn.tɪˈzeɪ.ʃən/",
    partOfSpeech: "noun",
    meaning: "量子化",
    techContext: "モデルの重みパラメータのビット精度（FP16/FP32など）をINT8やINT4に削減し、モデルサイズ縮小と推論高速化を図る技術。",
    example: "4-bit quantization allows running a 70B model with only 40GB of VRAM."
  },
  "fine-tune": {
    word: "fine-tune",
    phonetic: "/ˌfaɪnˈtjuːn/",
    partOfSpeech: "verb",
    meaning: "微調整する、ファインチューニングする",
    techContext: "事前学習済みの基盤モデルに対し、特定ドメイン（医療、プログラミング等）の専門データセットで追加学習を行い、精度を特化させること。",
    example: "We fine-tuned the model on open-source code repositories for better code generation."
  },
  "hallucination": {
    word: "hallucination",
    phonetic: "/həˌluː.sɪˈneɪ.ʃən/",
    partOfSpeech: "noun",
    meaning: "幻覚、ハルシネーション",
    techContext: "LLMがもっともらしい事実無根の虚偽情報や誤ったコードを真実であるかのように出力してしまう現象。",
    example: "Retrieval-Augmented Generation (RAG) is commonly used to curb hallucinations."
  },
  "retrieval": {
    word: "retrieval",
    phonetic: "/rɪˈtriː.vəl/",
    partOfSpeech: "noun",
    meaning: "検索、回収、取り出し",
    techContext: "ベクターデータベースなどから、ユーザーのクエリに関連する文書やコンテキストを類似度検索して取得すること（RAG: Retrieval-Augmented Generation）。",
    example: "Semantic retrieval uses vector embeddings to find contextually relevant documentation."
  },
  "embedding": {
    word: "embedding",
    phonetic: "/ɪmˈbed.ɪŋ/",
    partOfSpeech: "noun",
    meaning: "埋め込み、ベクトル表現",
    techContext: "テキスト、画像、音声などの高次元データを、意味的類似度を保持したまま固定次元の実数ベクトル空間に変換したもの。",
    example: "Vector embeddings allow calculating cosine similarity between different queries."
  },
  "prompt": {
    word: "prompt",
    phonetic: "/prɒmpt/",
    partOfSpeech: "noun / verb",
    meaning: "プロンプト、指示、促す",
    techContext: "LLMやAIモデルに対して望む出力や動作を引き出すために与える入力指示文やコンテキスト。",
    example: "Effective prompt engineering can drastically improve the reasoning ability of LLMs."
  },
  "serverless": {
    word: "serverless",
    phonetic: "/ˈsɜː.və.ləs/",
    partOfSpeech: "adjective",
    meaning: "サーバーレスの",
    techContext: "サーバーのプロビジョニングやOS管理を開発者が行う必要がなく、コードの実行時間やリクエスト数に応じて自動起動・従量課金されるクラウド実行モデル（AWS Lambda, Cloudflare Workers）。",
    example: "Serverless functions automatically scale up to handle sudden traffic spikes."
  },
  "microservices": {
    word: "microservices",
    phonetic: "/ˈmaɪ.krəʊˌsɜː.vɪ.sɪz/",
    partOfSpeech: "noun",
    meaning: "マイクロサービス",
    techContext: "単一の巨大なアプリケーションではなく、独立してデプロイ可能な小さなサービス群をAPIで連携させてシステムを構築する設計思想。",
    example: "Microservices enable different engineering teams to deploy independently."
  },
  "kubernetes": {
    word: "kubernetes",
    phonetic: "/ˌk(j)uːbərˈnɛtiːz/",
    partOfSpeech: "noun",
    meaning: "クーバネティス（K8s）",
    techContext: "Google発祥のオープンソースのコンテナオーケストレーション基盤。コンテナ化されたアプリの自動デプロイ、スケーリング、自己修復を管理。",
    example: "Kubernetes manages pod replication and load balancing automatically."
  },
  "terraform": {
    word: "terraform",
    phonetic: "/ˈter.ə.fɔːm/",
    partOfSpeech: "noun / verb",
    meaning: "Terraform (IaCツール)",
    techContext: "HashiCorp社が開発した、クラウドインフラ（AWS, GCP, Azure等）を宣言的なコードで定義・構築・管理するIaC（Infrastructure as Code）ツール。",
    example: "All AWS infrastructure is provisioned through declarative Terraform configuration files."
  },
  "ci/cd": {
    word: "ci/cd",
    phonetic: "/ˌsiː.aɪ.siːˈdiː/",
    partOfSpeech: "noun",
    meaning: "継続的インテグレーション / 継続的デリバリー",
    techContext: "コードのコミット時に自動テスト・ビルド・セキュリティ検査を実行し、本番環境への安全かつ高頻度な自動デプロイを実現する手法（GitHub Actions, GitLab CI）。",
    example: "A robust CI/CD pipeline shortens release cycles and prevents bugs from hitting production."
  }
};

/**
 * Normalizes a word by removing punctuation, digits, and trimming.
 */
export function cleanWord(raw) {
  if (!raw) return "";
  return raw
    .toLowerCase()
    .replace(/^[^a-z0-9]+|[^a-z0-9]+$/gi, '')
    .trim();
}

/**
 * Searches the built-in dictionary for a word.
 * Performs lemma / stem matching (e.g. "allocated" -> "allocate", "caching" -> "cache").
 */
export function lookupDictionary(rawWord) {
  const word = cleanWord(rawWord);
  if (!word) return null;

  // Direct hit
  if (techDictionary[word]) {
    return techDictionary[word];
  }

  // Common suffix stripping attempts
  const variations = [];
  if (word.endsWith('s') && !word.endsWith('ss')) variations.push(word.slice(0, -1));
  if (word.endsWith('es')) variations.push(word.slice(0, -2));
  if (word.endsWith('ed')) variations.push(word.slice(0, -2), word.slice(0, -1));
  if (word.endsWith('ing')) variations.push(word.slice(0, -3), word.slice(0, -3) + 'e');
  if (word.endsWith('ly')) variations.push(word.slice(0, -2));
  if (word.endsWith('tion')) variations.push(word.slice(0, -4) + 'te', word.slice(0, -4) + 't');
  if (word.endsWith('ment')) variations.push(word.slice(0, -4));
  if (word.endsWith('able')) variations.push(word.slice(0, -4), word.slice(0, -4) + 'e');
  if (word.endsWith('ies')) variations.push(word.slice(0, -3) + 'y');

  for (const v of variations) {
    if (techDictionary[v]) {
      return {
        ...techDictionary[v],
        matchedFrom: word
      };
    }
  }

  return null;
}

/**
 * Fallback to Free Dictionary API when word isn't in local dictionary.
 */
export async function fetchOnlineDefinition(rawWord) {
  const word = cleanWord(rawWord);
  if (!word) return null;

  try {
    const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word)}`);
    if (!res.ok) return null;
    const data = await res.json();
    if (!Array.isArray(data) || data.length === 0) return null;

    const item = data[0];
    const phonetic = item.phonetic || (item.phonetics && item.phonetics.find(p => p.text)?.text) || "";
    const firstMeaning = item.meanings && item.meanings[0];
    const partOfSpeech = firstMeaning ? firstMeaning.partOfSpeech : "word";
    const definition = firstMeaning && firstMeaning.definitions && firstMeaning.definitions[0] ? firstMeaning.definitions[0].definition : "";
    const example = firstMeaning && firstMeaning.definitions && firstMeaning.definitions[0] ? firstMeaning.definitions[0].example : "";

    return {
      word: item.word || word,
      phonetic: phonetic,
      partOfSpeech: partOfSpeech,
      meaning: definition, // English definition
      techContext: "General English Vocabulary. Tap the speaker icon to practice pronunciation.",
      example: example || `Common usage: "${word}" in technology news.`
    };
  } catch {
    return null;
  }
}