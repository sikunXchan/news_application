// Ultra-Fast Built-in Tech & English Dictionary with 0ms Offline Hits & Multi-source Online Fallback

export const techDictionary = {
  'function': { word: 'function', phonetic: '/ˈfʌŋk.ʃən/', partOfSpeech: 'noun / verb', meaning: '関数、機能、機能する', techContext: '入力を受け取って出力を返す再利用可能なコードブロック。', example: 'Arrow functions provide a concise syntax.' },
  'functions': { word: 'functions', phonetic: '/ˈfʌŋk.ʃənz/', partOfSpeech: 'noun / verb', meaning: '関数群、機能', techContext: '複数の機能やサーバーレス関数。', example: 'Serverless functions scale automatically.' },
  'feature': { word: 'feature', phonetic: '/ˈfiː.tʃər/', partOfSpeech: 'noun', meaning: '機能、特徴', techContext: 'ソフトウェアの新しい機能や特性。', example: 'The team shipped a new authentication feature.' },
  'features': { word: 'features', phonetic: '/ˈfiː.tʃərz/', partOfSpeech: 'noun', meaning: '機能群、特徴', techContext: 'アプリの機能一覧など。', example: 'It comes with many built-in features.' },
  'system': { word: 'system', phonetic: '/ˈsɪs.təm/', partOfSpeech: 'noun', meaning: 'システム、体系', techContext: '相互に作用する要素の集合体。', example: 'The operating system manages memory.' },
  'systems': { word: 'systems', phonetic: '/ˈsɪs.təmz/', partOfSpeech: 'noun', meaning: 'システム群', techContext: '分散システムなど。', example: 'Distributed systems are hard to debug.' },
  'data': { word: 'data', phonetic: '/ˈdeɪ.tə/', partOfSpeech: 'noun', meaning: 'データ、情報', techContext: '処理・保存される情報。', example: 'Data fetching is optimized via caching.' },
  'user': { word: 'user', phonetic: '/ˈjuː.zər/', partOfSpeech: 'noun', meaning: 'ユーザー、利用者', techContext: 'システムやアプリを利用する人。', example: 'User authentication is required.' },
  'users': { word: 'users', phonetic: '/ˈjuː.zərz/', partOfSpeech: 'noun', meaning: 'ユーザー群', techContext: '複数の利用者。', example: 'Active users increased by 20%.' },
  'app': { word: 'app', phonetic: '/æp/', partOfSpeech: 'noun', meaning: 'アプリ、アプリケーション', techContext: 'ユーザー向けのソフトウェア。', example: 'The mobile app is built with React Native.' },
  'application': { word: 'application', phonetic: '/ˌæp.lɪˈkeɪ.ʃən/', partOfSpeech: 'noun', meaning: 'アプリケーション、適用', techContext: 'ソフトウェアプログラム全体。', example: 'Modern web applications use SPAs.' },
  'applications': { word: 'applications', phonetic: '/ˌæp.lɪˈkeɪ.ʃənz/', partOfSpeech: 'noun', meaning: 'アプリケーション群', techContext: '複数のアプリ。', example: 'Enterprise applications require strict security.' },
  'development': { word: 'development', phonetic: '/dɪˈvel.əp.mənt/', partOfSpeech: 'noun', meaning: '開発、発展', techContext: 'ソフトウェアやシステムを設計・実装・改良していく一連の工程（software development）。', example: 'Agile development shortens the feedback loop between releases.' },
  'develop': { word: 'develop', phonetic: '/dɪˈvel.əp/', partOfSpeech: 'verb', meaning: '開発する、発展させる', techContext: 'アプリケーションや機能を新たに作り上げること。', example: 'The team plans to develop a new recommendation engine.' },
  'developer': { word: 'developer', phonetic: '/dɪˈvel.ə.pər/', partOfSpeech: 'noun', meaning: '開発者、プログラマー', techContext: 'ソフトウェアを設計・実装するエンジニア。', example: 'Full-stack developers work across the frontend and backend.' },
  'developers': { word: 'developers', phonetic: '/dɪˈvel.ə.pərz/', partOfSpeech: 'noun', meaning: '開発者群', techContext: '複数の開発エンジニア。', example: 'Developers rely on CI/CD pipelines to ship faster.' },
  'developing': { word: 'developing', phonetic: '/dɪˈvel.ə.pɪŋ/', partOfSpeech: 'verb', meaning: '開発している', techContext: '機能やシステムを構築中の状態。', example: 'They are developing a new AI-powered search feature.' },
  'developed': { word: 'developed', phonetic: '/dɪˈvel.əpt/', partOfSpeech: 'verb / adjective', meaning: '開発された、開発済みの', techContext: '既に実装・完成した状態を指す。', example: 'The feature was developed and shipped within two sprints.' },
  'distributed': { word: 'distributed', phonetic: '/dɪˈstrɪb.jə.tɪd/', partOfSpeech: 'adjective', meaning: '分散型の、分散された', techContext: '複数のサーバーやノードに処理やデータを分散させるシステム設計。', example: 'Distributed systems provide high availability.' },
  'distribute': { word: 'distribute', phonetic: '/dɪˈstrɪb.juːt/', partOfSpeech: 'verb', meaning: '分散する、配布する', techContext: '負荷やデータを複数の場所に分けること。', example: 'Distribute the load across multiple servers.' },
  
  // Common Verbs & Actions
  'deploy': { word: 'deploy', phonetic: '/dɪˈplɔɪ/', partOfSpeech: 'verb', meaning: '配備する、展開する、本番環境に反映する', techContext: '開発・テストしたコードやビルド成果物を本番サーバーやクラウド環境に反映して利用可能にすること。', example: 'Deploy the new release to production via CI/CD.' },
  'deploys': { word: 'deploys', phonetic: '/dɪˈplɔɪz/', partOfSpeech: 'verb', meaning: '配備する、展開する（3人称単数）', techContext: 'システムやコードを自動展開すること。', example: 'The agent deploys the microservice autonomously.' },
  'deployed': { word: 'deployed', phonetic: '/dɪˈplɔɪd/', partOfSpeech: 'verb', meaning: '配備された、デプロイ済みの', techContext: '本番環境やステージング環境に反映済みの状態。', example: 'The updated API was deployed successfully.' },
  'deploying': { word: 'deploying', phonetic: '/dɪˈplɔɪ.ɪŋ/', partOfSpeech: 'verb', meaning: 'デプロイ中、展開中', techContext: 'サーバーやコンテナへアプリケーションを展開しているプロセス。', example: 'We are deploying the hotfix right now.' },
  'deployment': { word: 'deployment', phonetic: '/dɪˈplɔɪ.mənt/', partOfSpeech: 'noun', meaning: 'デプロイ、配置、本番展開', techContext: 'CI/CDパイプラインによる本番リリース工程。', example: 'Automated deployment reduces human errors.' },
  
  'build': { word: 'build', phonetic: '/bɪld/', partOfSpeech: 'verb / noun', meaning: 'ビルドする、構築する、ビルド成果物', techContext: 'ソースコードをコンパイル・バンドル・最適化して実行可能ファイルを作成する工程。', example: 'Run npm run build before shipping.' },
  'builds': { word: 'builds', phonetic: '/bɪldz/', partOfSpeech: 'noun / verb', meaning: 'ビルド、構築', techContext: '生成されたアプリケーションバイナリやバンドル。', example: 'Multi-stage builds reduce Docker image sizes.' },
  'building': { word: 'building', phonetic: '/ˈbɪl.dɪŋ/', partOfSpeech: 'verb', meaning: '構築している、ビルド中', techContext: 'システムやモジュールを構築・作成すること。', example: 'Startups are building lightweight AI models.' },

  'scale': { word: 'scale', phonetic: '/skeɪl/', partOfSpeech: 'verb / noun', meaning: '規模を拡大する、拡大縮小する、規模', techContext: 'トラフィックや負荷の増減に応じてサーバー台数やリソースを自動調整すること（Scale out / Scale up）。', example: 'Kubernetes can scale pods horizontally.' },
  'scaling': { word: 'scaling', phonetic: '/ˈskeɪ.lɪŋ/', partOfSpeech: 'noun / verb', meaning: 'スケーリング、規模拡大', techContext: '負荷分散やトラフィック急増への耐性確保。', example: 'Horizontal scaling is essential for high traffic.' },
  'scalability': { word: 'scalability', phonetic: '/ˌskeɪ.ləˈbɪl.ə.ti/', partOfSpeech: 'noun', meaning: '拡張性、スケーラビリティ', techContext: '需要の増加に対して性能を維持・拡張できるシステムの適応能力。', example: 'Serverless architectures provide infinite scalability.' },

  'slash': { word: 'slash', phonetic: '/slæʃ/', partOfSpeech: 'verb', meaning: '大幅に削減する、切り詰める', techContext: 'レイテンシ、コスト、ファイルサイズなどを劇的に削減すること。', example: 'Slashing cold start times in serverless functions.' },
  'slashing': { word: 'slashing', phonetic: '/ˈslæʃ.ɪŋ/', partOfSpeech: 'verb', meaning: '大幅削減中、劇的カット', techContext: 'ボトルネックや不要なオーバーヘッドを大幅に削減する行為。', example: 'Slashing container image sizes from 1GB down to 50MB.' },
  'slashed': { word: 'slashed', phonetic: '/slæʃt/', partOfSpeech: 'verb', meaning: '大幅削減された', techContext: '劇的にカットされた状態。', example: 'The optimization slashed API latency by 80%.' },

  'reduce': { word: 'reduce', phonetic: '/rɪˈdʒuːs/', partOfSpeech: 'verb', meaning: '減らす、削減する、還元する', techContext: '1) 計算量やメモリ使用量を削減する。2) 配列の畳み込み関数（Array.prototype.reduce）。', example: 'Refactoring reduced the bundle size by 40%.' },
  'reduces': { word: 'reduces', phonetic: '/rɪˈdʒuː.sɪz/', partOfSpeech: 'verb', meaning: '削減する（3単現）', techContext: 'オーバーヘッドやメモリ消費を減らす。', example: 'Caching reduces database load.' },
  'reduction': { word: 'reduction', phonetic: '/rɪˈdʌk.ʃən/', partOfSpeech: 'noun', meaning: '削減、減少、縮小', techContext: 'オーバーヘッドや遅延の減少。', example: 'We observed a 70% reduction in boilerplate.' },

  'optimize': { word: 'optimize', phonetic: '/ˈɒp.tɪ.maɪz/', partOfSpeech: 'verb', meaning: '最適化する、効率化する', techContext: 'コードの処理速度、メモリ効率、レンダリング性能を最大化すること。', example: 'Optimize React components with useMemo and useCallback.' },
  'optimizing': { word: 'optimizing', phonetic: '/ˈɒp.tɪ.maɪ.zɪŋ/', partOfSpeech: 'verb', meaning: '最適化中', techContext: 'パフォーマンスチューニングの実行。', example: 'Optimizing SQL queries with index scans.' },
  'optimization': { word: 'optimization', phonetic: '/ˌɒp.tɪ.maɪˈzeɪ.ʃən/', partOfSpeech: 'noun', meaning: '最適化', techContext: '性能やコストの改善プロセス。', example: 'Compiler optimization improves execution speed.' },

  'refactor': { word: 'refactor', phonetic: '/riːˈfæk.tər/', partOfSpeech: 'verb', meaning: 'リファクタリングする、構造を整理する', techContext: '外部仕様を変えずに内部構造を綺麗にして保守性を高めること。', example: 'We refactored the legacy module to use async/await.' },
  'refactoring': { word: 'refactoring', phonetic: '/riːˈfæk.tər.ɪŋ/', partOfSpeech: 'noun / verb', meaning: 'リファクタリング作業', techContext: 'コード品質の改善活動。', example: 'Continuous refactoring prevents technical debt.' },

  'orchestrate': { word: 'orchestrate', phonetic: '/ˈɔː.kɪ.streɪt/', partOfSpeech: 'verb', meaning: '統合制御する、編成する', techContext: '複数のマイクロサービスやコンテナの協調動作を自動管理すること。', example: 'Kubernetes orchestrates container clusters.' },
  'orchestrating': { word: 'orchestrating', phonetic: '/ˈɔː.kɪ.streɪ.tɪŋ/', partOfSpeech: 'verb', meaning: '統合管理中', techContext: '分散システムの自動制御。', example: 'Orchestrating multi-agent AI workflows.' },
  'orchestration': { word: 'orchestration', phonetic: '/ˌɔː.kɪˈstreɪ.ʃən/', partOfSpeech: 'noun', meaning: 'オーケストレーション、統合管理', techContext: 'コンテナの自動配置、スケーリング、死活監視の仕組み。', example: 'Container orchestration simplifies DevOps.' },

  'accelerate': { word: 'accelerate', phonetic: '/əkˈsel.ə.reɪt/', partOfSpeech: 'verb', meaning: '加速させる、高速化する', techContext: '処理速度や開発サイクルを高速化すること（GPU acceleration, Developer velocity）。', example: 'Distributed caching accelerates global API responses.' },
  'accelerates': { word: 'accelerates', phonetic: '/əkˈsel.ə.reɪts/', partOfSpeech: 'verb', meaning: '加速する（3単現）', techContext: '高速化をもたらす。', example: 'Edge computing accelerates static asset delivery.' },

  'mitigate': { word: 'mitigate', phonetic: '/ˈmɪt.ɪ.ɡeɪt/', partOfSpeech: 'verb', meaning: '緩和する、軽減する', techContext: 'セキュリティ脆弱性やシステム障害のリスクを軽減すること。', example: 'Rate limiting mitigates DDoS attack impacts.' },
  'mitigates': { word: 'mitigates', phonetic: '/ˈmɪt.ɪ.ɡeɪts/', partOfSpeech: 'verb', meaning: '緩和する', techContext: 'リスクを減らす。', example: 'Pre-warming mitigates cold start latency.' },

  'replicate': { word: 'replicate', phonetic: '/ˈrep.lɪ.keɪt/', partOfSpeech: 'verb', meaning: '複製する、レプリケーションする', techContext: '複数サーバー間で同一データを同期・複製保持すること。', example: 'The database replicates writes across three availability zones.' },
  'replicates': { word: 'replicates', phonetic: '/ˈrep.lɪ.keɪts/', partOfSpeech: 'verb', meaning: '複製する', techContext: 'データの自動複製。', example: 'Edge KV replicates keys to global edge PoPs.' },
  'replication': { word: 'replication', phonetic: '/ˌrep.lɪˈkeɪ.ʃən/', partOfSpeech: 'noun', meaning: 'レプリケーション、データ複製', techContext: '耐障害性と読み取り性能向上のためのデータ複製技術。', example: 'Read replication improves query throughput.' },

  'simplify': { word: 'simplify', phonetic: '/ˈsɪm.plɪ.faɪ/', partOfSpeech: 'verb', meaning: '単純化する、簡潔にする', techContext: '複雑なアーキテクチャやコードの依存関係を整理して扱いやすくすること。', example: 'React 19 Actions simplify form state handling.' },
  'simplifying': { word: 'simplifying', phonetic: '/ˈsɪm.plɪ.faɪ.ɪŋ/', partOfSpeech: 'verb', meaning: '単純化している', techContext: '設計やAPIの簡素化。', example: 'Simplifying full-stack state management.' },

  'eliminate': { word: 'eliminate', phonetic: '/iˈlɪm.ɪ.neɪt/', partOfSpeech: 'verb', meaning: '排除する、完全に取り除く', techContext: '無駄な再レンダリングやバグ要因、不要コードを完全削除すること。', example: 'Eliminating manual loading flags improves maintainability.' },
  'eliminating': { word: 'eliminating', phonetic: '/iˈlɪm.ɪ.neɪ.tɪŋ/', partOfSpeech: 'verb', meaning: '排除している', techContext: 'ボトルネックの完全除去。', example: 'Eliminating memory leaks with automated GC.' },

  // Key Tech Concepts & Nouns
  'agent': { word: 'agent', phonetic: '/ˈeɪ.dʒənt/', partOfSpeech: 'noun', meaning: '自律エージェント、代理人', techContext: 'AIが目標に向かって自律的に推論・ツール呼び出し・コード生成・実行を行うプログラム。', example: 'Autonomous AI agents deploy microservices without human intervention.' },
  'agents': { word: 'agents', phonetic: '/ˈeɪ.dʒənts/', partOfSpeech: 'noun', meaning: '自律エージェント（複数形）', techContext: '複数協調型AIシステム（Multi-Agent System）。', example: 'AI agents collaborate to solve complex programming tasks.' },
  'autonomous': { word: 'autonomous', phonetic: '/ɔːˈtɒn.ə.məs/', partOfSpeech: 'adjective', meaning: '自律的な、自動の', techContext: '人間の直接操作なしに判断・実行を自動で行う性質。', example: 'Autonomous coding assistants are changing software development.' },

  'latency': { word: 'latency', phonetic: '/ˈleɪ.tən.si/', partOfSpeech: 'noun', meaning: '遅延時間、レイテンシ', techContext: 'リクエスト送信からレスポンス到着までの待ち時間（TTFB）。', example: 'Edge computing slashes network latency.' },
  'throughput': { word: 'throughput', phonetic: '/ˈθruː.pʊt/', partOfSpeech: 'noun', meaning: 'スループット、処理能力', techContext: '単位時間あたりに処理・転送できるデータ量やリクエスト数。', example: 'Kafka delivers high-throughput event streaming.' },
  'bandwidth': { word: 'bandwidth', phonetic: '/ˈbænd.wɪdθ/', partOfSpeech: 'noun', meaning: '帯域幅、データ転送容量', techContext: 'ネットワーク回線の最大通信容量。', example: 'Large assets consume significant network bandwidth.' },

  'hydrate': { word: 'hydrate', phonetic: '/ˈhaɪ.dreɪt/', partOfSpeech: 'verb', meaning: 'ハイドレーションする、水和させる', techContext: '【Web開発】SSRで生成された静的HTMLにクライアントJSでイベントリスナーを結合して操作可能にする処理。', example: 'React hydrates server-rendered HTML snapshots in the browser.' },
  'hydration': { word: 'hydration', phonetic: '/haɪˈdreɪ.ʃən/', partOfSpeech: 'noun', meaning: 'ハイドレーション', techContext: 'SSRからSPAへの初期化フェーズ。', example: 'Partial hydration reduces initial JavaScript payload.' },

  'optimistic': { word: 'optimistic', phonetic: '/ˌɒp.tɪˈmɪs.tɪk/', partOfSpeech: 'adjective', meaning: '楽観的な（楽観的UI更新）', techContext: 'サーバーの応答を待たずにUIを即座に更新し、体感速度を最高にする設計（useOptimistic）。', example: 'Optimistic UI updates give users instant visual feedback.' },
  'boilerplate': { word: 'boilerplate', phonetic: '/ˈbɔɪ.lə.pleɪt/', partOfSpeech: 'noun', meaning: '定型文、お決まりのコード', techContext: '何度も書く必要がある決まり切った定型コード。', example: 'React 19 Actions eliminate useState boilerplate.' },

  'immutable': { word: 'immutable', phonetic: '/ɪˈmjuː.tə.bəl/', partOfSpeech: 'adjective', meaning: '不変の、変更不可の', techContext: '一度作成された後に状態を変更できないデータ構造。状態管理やReactの鉄則。', example: 'Treat Redux state as immutable.' },
  'sandboxing': { word: 'sandboxing', phonetic: '/ˈsænd.bɒks.ɪŋ/', partOfSpeech: 'noun', meaning: 'サンドボックス化、隔離実行', techContext: '悪意あるコードやAI生成コードがホスト環境を壊さないよう隔離された安全領域で実行すること。', example: 'Run untrusted AI code inside a secure sandboxing environment.' },
  'vulnerability': { word: 'vulnerability', phonetic: '/ˌvʌl.nər.əˈbɪl.ə.ti/', partOfSpeech: 'noun', meaning: '脆弱性、セキュリティホール', techContext: '攻撃者に悪用される可能性のあるシステムの欠陥。', example: 'Patch the zero-day vulnerability immediately.' },
  'vulnerabilities': { word: 'vulnerabilities', phonetic: '/ˌvʌl.nər.əˈbɪl.ə.tiz/', partOfSpeech: 'noun', meaning: '脆弱性（複数形）', techContext: 'セキュリティリスク。', example: 'Static analysis tools scan for known CVE vulnerabilities.' },

  'microservice': { word: 'microservice', phonetic: '/ˈmaɪ.krəʊˌsɜː.vɪs/', partOfSpeech: 'noun', meaning: 'マイクロサービス', techContext: '単一機能に特化した独立デプロイ可能な小型サービス。', example: 'Each microservice manages its own dedicated database.' },
  'microservices': { word: 'microservices', phonetic: '/ˈmaɪ.krəʊˌsɜː.vɪ.sɪz/', partOfSpeech: 'noun', meaning: 'マイクロサービス群', techContext: '分散サービス指向アーキテクチャ。', example: 'Transitioning from monoliths to microservices.' },

  'inference': { word: 'inference', phonetic: '/ˈɪn.fər.əns/', partOfSpeech: 'noun', meaning: '推論、推論実行', techContext: '学習済みAIモデルに入力を与えて出力テキストや予測を生成するフェーズ。', example: 'GPU quantization speeds up LLM inference.' },
  'quantization': { word: 'quantization', phonetic: '/ˌkwɒn.tɪˈzeɪ.ʃən/', partOfSpeech: 'noun', meaning: '量子化', techContext: 'モデルの重みをFP16からINT8/INT4へ軽量化しメモリと推論速度を最適化する技術。', example: '4-bit quantization allows running 70B models locally.' },
  'prompt': { word: 'prompt', phonetic: '/prɒmpt/', partOfSpeech: 'noun / verb', meaning: 'プロンプト、AIへの指示', techContext: 'LLMに期待する動作を指示するための入力テキスト。', example: 'Crafting concise prompts improves model accuracy.' },
  'hallucination': { word: 'hallucination', phonetic: '/həˌluː.sɪˈneɪ.ʃən/', partOfSpeech: 'noun', meaning: 'ハルシネーション、幻覚', techContext: 'AIが事実無根の情報をそれらしく出力してしまう現象。', example: 'RAG pipelines effectively reduce AI hallucinations.' },
  'retrieval': { word: 'retrieval', phonetic: '/rɪˈtriː.vəl/', partOfSpeech: 'noun', meaning: '検索、取り出し', techContext: 'ベクターDB等からクエリに関連する文書を検索取得する処理（RAG）。', example: 'Semantic retrieval queries embeddings in vector databases.' },

  'serverless': { word: 'serverless', phonetic: '/ˈsɜː.və.ləs/', partOfSpeech: 'adjective', meaning: 'サーバーレスの', techContext: 'サーバー管理不要でコード実行時のみ自動スケール・課金されるクラウド形態。', example: 'Deploy API endpoints on serverless functions.' },
  'kubernetes': { word: 'kubernetes', phonetic: '/ˌkjuː.bərˈnet.iːz/', partOfSpeech: 'noun', meaning: 'Kubernetes (K8s)', techContext: 'コンテナの自動配置・スケーリング・死活監視を行う基盤。', example: 'Kubernetes manages auto-healing across clusters.' },
  'distroless': { word: 'distroless', phonetic: '/dɪsˈtroʊ.ləs/', partOfSpeech: 'adjective', meaning: 'ディストロレス（OS機能極小イメージ）', techContext: 'シェルやパッケージマネージャを含まずアプリ実行に必要なバイナリのみを入れた超軽量・高安全なDockerイメージ。', example: 'Distroless base images slash container size and vulnerabilities.' },

  'cryptography': { word: 'cryptography', phonetic: '/krɪpˈtɒɡ.rə.fi/', partOfSpeech: 'noun', meaning: '暗号技術、暗号学', techContext: '通信やデータを暗号鍵を用いて安全に保護する技術。', example: 'Post-quantum cryptography defends against quantum computers.' },
  'quantum': { word: 'quantum', phonetic: '/ˈkwɒn.təm/', partOfSpeech: 'noun / adjective', meaning: '量子、量子力学の', techContext: '量子コンピュータ（Quantum Computing）。', example: 'Quantum computing poses threats to standard RSA encryption.' },
  'encryption': { word: 'encryption', phonetic: '/ɪnˈkrɪp.ʃən/', partOfSpeech: 'noun', meaning: '暗号化', techContext: '平文を暗号文に変換するセキュリティ保護。', example: 'End-to-end encryption ensures user privacy.' },
  'breach': { word: 'breach', phonetic: '/briːtʃ/', partOfSpeech: 'noun / verb', meaning: '侵害、情報漏洩、突破する', techContext: 'セキュリティ侵害インシデント（Data Breach）。', example: 'The security breach exposed encrypted credentials.' },

  // Common Technical Adjectives & Modifiers
  'asynchronous': { word: 'asynchronous', phonetic: '/eɪˈsɪŋ.krə.nəs/', partOfSpeech: 'adjective', meaning: '非同期の', techContext: '処理の完了を待たずに次の処理を実行する方式（async/await）。', example: 'Asynchronous calls prevent UI blocking.' },
  'stateless': { word: 'stateless', phonetic: '/ˈsteɪt.ləs/', partOfSpeech: 'adjective', meaning: 'ステートレスな、状態を持たない', techContext: '各リクエストが独立して完結する設計（REST API）。', example: 'Stateless servers scale horizontally with ease.' },
  'resilient': { word: 'resilient', phonetic: '/rɪˈzɪl.jənt/', partOfSpeech: 'adjective', meaning: '耐障害性のある、回復力のある', techContext: '一部がダウンしても自動復旧しサービスを継続できる設計。', example: 'Build resilient systems with circuit breakers.' },
  'deterministic': { word: 'deterministic', phonetic: '/dɪˌtɜː.mɪˈnɪs.tɪk/', partOfSpeech: 'adjective', meaning: '決定論的な、再現性のある', techContext: '同一の入力に対して常に同一の結果を返す信頼性の高い性質。', example: 'Unit tests must be completely deterministic.' },
  'deprecated': { word: 'deprecated', phonetic: '/ˈdep.rə.keɪ.tɪd/', partOfSpeech: 'adjective', meaning: '非推奨の、将来廃止予定の', techContext: 'より新しい代替手段があるため使用が推奨されない古いAPI。', example: 'This legacy endpoint is deprecated in v2.' },

  // Common Functional & News Words
  'without': { word: 'without', phonetic: '/wɪˈðaʊt/', partOfSpeech: 'preposition', meaning: '〜なしで、〜を持たずに', techContext: '依存関係や人間介入を伴わない状態（e.g. without human intervention）。', example: 'Deploy automatically without manual approval.' },
  'intervention': { word: 'intervention', phonetic: '/ˌɪn.təˈven.ʃən/', partOfSpeech: 'noun', meaning: '介入、手出し', techContext: '人間の手作業による介入（Human intervention）。', example: 'Zero human intervention in automated pipelines.' },
  'human': { word: 'human', phonetic: '/ˈhjuː.mən/', partOfSpeech: 'noun / adjective', meaning: '人間、人間の', techContext: 'Human-in-the-loop: AIの判断を人間が最終承認するワークフロー。', example: 'Human oversight is vital for production deployments.' },
  'shift': { word: 'shift', phonetic: '/ʃɪft/', partOfSpeech: 'noun / verb', meaning: '移行、変化、シフトする', techContext: '技術パラダイムやアーキテクチャの劇的な変化。', example: 'A major paradigm shift toward autonomous AI tools.' },
  'production': { word: 'production', phonetic: '/prəˈdʌk.ʃən/', partOfSpeech: 'noun', meaning: '本番環境、製品化', techContext: 'エンドユーザーが実際に利用している本番稼働環境（Prod environment）。', example: 'Never test unverified code directly in production.' },
  'essential': { word: 'essential', phonetic: '/ɪˈsen.ʃəl/', partOfSpeech: 'adjective', meaning: '必須の、不可欠な', techContext: 'コアとなる必須要件。', example: 'English communication is essential for global engineers.' },
  'paradigm': { word: 'paradigm', phonetic: '/ˈpær.ə.daɪm/', partOfSpeech: 'noun', meaning: 'パラダイム、枠組み、概念的枠組み', techContext: 'プログラミングや設計の根本的な考え方（OOP, FP, Declarative）。', example: 'React introduced a declarative component paradigm.' },
  'benchmark': { word: 'benchmark', phonetic: '/ˈbentʃ.mɑːk/', partOfSpeech: 'noun / verb', meaning: 'ベンチマーク、性能指標', techContext: 'ハードやソフトの性能を客観的に比較測定するテスト。', example: 'The benchmark measured query throughput and latency.' },
  'consensus': { word: 'consensus', phonetic: '/kənˈsen.səs/', partOfSpeech: 'noun', meaning: '合意、合意形成', techContext: '分散システムでノード間の一貫性を保証する合意アルゴリズム（Raft, Paxos）。', example: 'Raft consensus ensures consistent state across replicas.' },
  'intractable': { word: 'intractable', phonetic: '/ɪnˈtræk.tə.bəl/', partOfSpeech: 'adjective', meaning: '計算量的に解けない、手に負えない', techContext: '現在のコンピュータや量子マシンでも多項式時間で解けない計算困難な数学問題。', example: 'Lattice cryptography relies on computationally intractable problems.' },

  // Common general English vocabulary that frequently appears in the
  // connecting prose of news articles, not just in tech jargon. The online
  // lookup fallback can be unreliable, so these everyday words are covered
  // offline too.
  'profound': { word: 'profound', phonetic: '/prəˈfaʊnd/', partOfSpeech: 'adjective', meaning: '深遠な、重大な', techContext: '影響や変化が非常に深く重要であることを表す。', example: 'The update has a profound impact on developer workflows.' },
  'landscape': { word: 'landscape', phonetic: '/ˈlænd.skeɪp/', partOfSpeech: 'noun', meaning: '状況、業界の全体像', techContext: '業界や技術分野全体の状況を指す比喩表現（e.g. "the tech landscape"）。', example: 'The competitive landscape is shifting toward AI-first products.' },
  'transformation': { word: 'transformation', phonetic: '/ˌtræns.fərˈmeɪ.ʃən/', partOfSpeech: 'noun', meaning: '変革、変容', techContext: 'システムや業界の根本的な変化（digital transformation）。', example: 'Cloud adoption drove a major transformation in IT operations.' },
  'undergo': { word: 'undergo', phonetic: '/ˌʌn.dəˈɡəʊ/', partOfSpeech: 'verb', meaning: '経験する、被る', techContext: '変化やプロセスを経ること。', example: 'The platform will undergo a major architecture overhaul.' },
  'undergoing': { word: 'undergoing', phonetic: '/ˌʌn.dəˈɡəʊ.ɪŋ/', partOfSpeech: 'verb', meaning: '経験している最中', techContext: '変化やプロセスを現在進行形で経ていること。', example: 'The industry is undergoing rapid consolidation.' },
  'increasing': { word: 'increasing', phonetic: '/ɪnˈkriː.sɪŋ/', partOfSpeech: 'adjective / verb', meaning: '増加している', techContext: '需要やトラフィックなどが増え続けている状態。', example: 'Increasing demand pushed the team to scale infrastructure.' },
  'complexity': { word: 'complexity', phonetic: '/kəmˈplek.sə.ti/', partOfSpeech: 'noun', meaning: '複雑さ', techContext: 'システムやコードの複雑さの度合い（time complexity, cyclomatic complexity）。', example: 'Microservices can add operational complexity.' },
  'driven': { word: 'driven', phonetic: '/ˈdrɪv.ən/', partOfSpeech: 'adjective', meaning: '駆動された、動機づけられた', techContext: 'データや目標によって動かされている様子（data-driven）。', example: 'Data-driven decisions rely on accurate analytics.' },
  'sophisticated': { word: 'sophisticated', phonetic: '/səˈfɪs.tɪ.keɪ.tɪd/', partOfSpeech: 'adjective', meaning: '洗練された、高度な', techContext: '技術的に高度で精巧な設計や攻撃手法を指す。', example: 'Attackers used a sophisticated phishing technique.' },
  'subtle': { word: 'subtle', phonetic: '/ˈsʌt.əl/', partOfSpeech: 'adjective', meaning: '微妙な、繊細な', techContext: '見つけにくいバグや違いを表す（subtle bug）。', example: 'A subtle race condition caused intermittent failures.' },
  'crucial': { word: 'crucial', phonetic: '/ˈkruː.ʃəl/', partOfSpeech: 'adjective', meaning: '極めて重要な', techContext: '成功や安全性にとって欠かせない要素。', example: 'Input validation is crucial for security.' },
  'unprecedented': { word: 'unprecedented', phonetic: '/ʌnˈpres.ɪ.den.tɪd/', partOfSpeech: 'adjective', meaning: '前例のない', techContext: 'これまでにない規模や速さを表す。', example: 'The model achieved unprecedented accuracy on the benchmark.' },
  'ecosystem': { word: 'ecosystem', phonetic: '/ˈiː.kəʊ.sɪs.təm/', partOfSpeech: 'noun', meaning: 'エコシステム、生態系', techContext: 'ツールやサービスが相互に連携し合う技術圏を指す比喩表現。', example: 'The open-source ecosystem accelerates innovation.' },
  'robust': { word: 'robust', phonetic: '/rəʊˈbʌst/', partOfSpeech: 'adjective', meaning: '堅牢な、頑丈な', techContext: '障害に強く安定して動作するシステムを指す。', example: 'Build a robust error-handling strategy.' },
  'seamless': { word: 'seamless', phonetic: '/ˈsiːm.ləs/', partOfSpeech: 'adjective', meaning: 'シームレスな、継ぎ目のない', techContext: 'ユーザーが違和感なく利用できる滑らかな体験。', example: 'The migration provided a seamless user experience.' },
  'comprehensive': { word: 'comprehensive', phonetic: '/ˌkɒm.prɪˈhen.sɪv/', partOfSpeech: 'adjective', meaning: '包括的な', techContext: '抜け漏れのない網羅的な対応やテストを指す。', example: 'The team ran a comprehensive security audit.' },
  'significant': { word: 'significant', phonetic: '/sɪɡˈnɪf.ɪ.kənt/', partOfSpeech: 'adjective', meaning: '重要な、重大な', techContext: '無視できないほど大きな影響や差を表す。', example: 'The update brought significant performance gains.' },
  'substantial': { word: 'substantial', phonetic: '/səbˈstæn.ʃəl/', partOfSpeech: 'adjective', meaning: '相当な、実質的な', techContext: '量や規模が大きいことを表す。', example: 'Caching led to a substantial reduction in load times.' },
  'emerging': { word: 'emerging', phonetic: '/iˈmɜː.dʒɪŋ/', partOfSpeech: 'adjective', meaning: '新興の、台頭しつつある', techContext: '最近登場し急速に成長している技術や市場を指す。', example: 'Emerging markets are adopting mobile-first platforms.' },
  'innovative': { word: 'innovative', phonetic: '/ˈɪn.ə.və.tɪv/', partOfSpeech: 'adjective', meaning: '革新的な', techContext: '新しい発想で問題を解決するアプローチを指す。', example: 'The startup built an innovative caching layer.' },
  'dramatically': { word: 'dramatically', phonetic: '/drəˈmæt.ɪ.kəl.i/', partOfSpeech: 'adverb', meaning: '劇的に', techContext: '数値や性能が大きく変化したことを強調する副詞。', example: 'Latency dropped dramatically after the optimization.' },
  'fundamentally': { word: 'fundamentally', phonetic: '/ˌfʌn.dəˈmen.təl.i/', partOfSpeech: 'adverb', meaning: '根本的に', techContext: '設計思想やアーキテクチャの本質的な変化を表す。', example: 'The new API fundamentally changes how clients authenticate.' },
  'ultimately': { word: 'ultimately', phonetic: '/ˈʌl.tɪ.mət.li/', partOfSpeech: 'adverb', meaning: '最終的に', techContext: '一連の変化やプロセスの結論を導く際に使う。', example: 'Ultimately, the team chose a serverless architecture.' },
  'consequently': { word: 'consequently', phonetic: '/ˈkɒn.sɪ.kwənt.li/', partOfSpeech: 'adverb', meaning: '結果として', techContext: '前述の原因から導かれる結果を示す接続副詞。', example: 'The cache was misconfigured; consequently, requests timed out.' },
  'nevertheless': { word: 'nevertheless', phonetic: '/ˌnev.ə.ðəˈles/', partOfSpeech: 'adverb', meaning: 'それにもかかわらず', techContext: '前述の内容と対比する接続副詞。', example: 'The API is deprecated; nevertheless, many services still use it.' },
  'notably': { word: 'notably', phonetic: '/ˈnəʊ.tə.bli/', partOfSpeech: 'adverb', meaning: '特に、顕著に', techContext: '特筆すべき点を強調する際に使う。', example: 'Performance improved, notably on mobile devices.' },
  'remarkably': { word: 'remarkably', phonetic: '/rɪˈmɑː.kə.bli/', partOfSpeech: 'adverb', meaning: '著しく、驚くほど', techContext: '予想以上の変化や結果を強調する副詞。', example: 'The new model runs remarkably fast on edge devices.' },
  'meticulous': { word: 'meticulous', phonetic: '/məˈtɪk.jʊ.ləs/', partOfSpeech: 'adjective', meaning: '細心の、几帳面な', techContext: '細部まで注意深く配慮する様子。', example: 'Meticulous code review catches subtle bugs early.' }
};

export function cleanWord(raw) {
  if (!raw) return '';
  return raw
    .toLowerCase()
    .replace(/^[^a-z0-9]+|[^a-z0-9]+$/gi, '')
    .trim();
}

// In-memory runtime cache for online lookups
const memoryCache = new Map();

export function lookupDictionary(rawWord) {
  const word = cleanWord(rawWord);
  if (!word) return null;

  if (techDictionary[word]) {
    return techDictionary[word];
  }

  if (memoryCache.has(word)) {
    return memoryCache.get(word);
  }

  // Common suffix variations
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
 * Fast online definition & Japanese translation with a 6.0s timeout. A
 * tighter timeout (previously 2.0s) was aborting both lookups before slower
 * mobile connections could get a response, producing spurious "not found"
 * results even for common words the APIs do have definitions for.
 */
export async function fetchOnlineDefinition(rawWord) {
  const word = cleanWord(rawWord);
  if (!word) return null;

  if (memoryCache.has(word)) {
    return memoryCache.get(word);
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 6000);

  try {
    // Parallel fetch: English dictionary + Japanese translation
    const dictPromise = fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word)}`, {
      signal: controller.signal
    }).then(r => r.ok ? r.json() : null).catch(() => null);

    const transPromise = fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=ja&dt=t&q=${encodeURIComponent(word)}`, {
      signal: controller.signal
    }).then(r => r.ok ? r.json() : null).catch(() => null);

    const [dictData, transData] = await Promise.all([dictPromise, transPromise]);
    clearTimeout(timeoutId);

    const dictItem = Array.isArray(dictData) && dictData.length > 0 ? dictData[0] : null;
    const phonetic = dictItem?.phonetic || (dictItem?.phonetics && dictItem.phonetics.find(p => p.text)?.text) || '';
    const firstMeaning = dictItem?.meanings && dictItem.meanings[0];
    const partOfSpeech = firstMeaning ? firstMeaning.partOfSpeech : 'word';
    const enDef = firstMeaning?.definitions?.[0]?.definition || '';
    const example = firstMeaning?.definitions?.[0]?.example || '';

    // Japanese translated meaning from Google Translate
    let jaMeaning = '';
    if (transData && transData[0] && transData[0][0] && transData[0][0][0]) {
      jaMeaning = transData[0][0][0];
    }

    // If translation failed or returned the exact same English word, fall
    // back to the English definition. If neither source found anything
    // usable, don't fabricate a placeholder that just echoes the word back
    // as if it were an answer — report "not found" so the UI can be honest
    // about it instead of showing a fake definition.
    if (!jaMeaning || jaMeaning.toLowerCase() === word.toLowerCase()) {
      if (enDef) {
        jaMeaning = `[英英] ${enDef}`;
      } else {
        memoryCache.set(word, null);
        return null;
      }
    }

    const result = {
      word: dictItem?.word || word,
      phonetic: phonetic,
      partOfSpeech: partOfSpeech,
      meaning: jaMeaning,
      techContext: `General & Technical English vocabulary: "${word}". Tap audio icon to practice pronunciation.`,
      example: example || `Common usage: "${word}" in technical documentation and news.`
    };

    memoryCache.set(word, result);
    return result;
  } catch {
    clearTimeout(timeoutId);
    // Network failure or timeout — report "not found" rather than a fake
    // placeholder definition. Not cached, since a retry might succeed.
    return null;
  }
}