// Ultra-Fast Built-in Tech & English Dictionary with 0ms Offline Hits & Multi-source Online Fallback

export const techDictionary = {
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
  'intractable': { word: 'intractable', phonetic: '/ɪnˈtræk.tə.bəl/', partOfSpeech: 'adjective', meaning: '計算量的に解けない、手に負えない', techContext: '現在のコンピュータや量子マシンでも多項式時間で解けない計算困難な数学問題。', example: 'Lattice cryptography relies on computationally intractable problems.' }
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
 * Fast online definition & Japanese translation with strict 2.0s timeout.
 */
export async function fetchOnlineDefinition(rawWord) {
  const word = cleanWord(rawWord);
  if (!word) return null;

  if (memoryCache.has(word)) {
    return memoryCache.get(word);
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 2000);

  try {
    // Parallel fetch: English dictionary + Japanese translation
    const dictPromise = fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word)}`, {
      signal: controller.signal
    }).then(r => r.ok ? r.json() : null).catch(() => null);

    const transPromise = fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(word)}&langpair=en|ja`, {
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

    // Japanese translated meaning
    let jaMeaning = transData?.responseData?.translatedText;
    if (!jaMeaning || jaMeaning.toLowerCase() === word.toLowerCase() || jaMeaning.startsWith('MYMEMORY')) {
      jaMeaning = enDef || `${word}（英語の語彙・用語）`;
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
    // Instant fallback if network times out
    const fallback = {
      word: word,
      phonetic: '',
      partOfSpeech: 'word',
      meaning: `${word}（英語の語彙・用語）`,
      techContext: 'Tap audio icon to practice pronunciation.',
      example: `Encountered in technical text: "${word}"`
    };
    memoryCache.set(word, fallback);
    return fallback;
  }
}