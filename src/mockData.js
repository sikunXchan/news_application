export const categories = [
  { id: 'all', label: 'All' },
  { id: 'tech', label: 'Technology' },
  { id: 'business', label: 'Business' },
  { id: 'world', label: 'World' },
  { id: 'science', label: 'Science' },
  { id: 'entertainment', label: 'Entertainment' },
];

export const mockNews = [
  // Tech
  {
    id: '1', category: 'tech', title: 'Apple Unveils New AI Features Integrated Deeply into iOS 20', source: 'Tech Insider', timeAgo: '2h ago', imageUrl: 'https://images.unsplash.com/photo-1512054502232-10a0a035d672?auto=format&fit=crop&q=80&w=1000', readTime: '3 min', vibe: 'positive',
    summary: ['Siri is now powered by a large language model, allowing natural conversations.', 'Photos app automatically categorizes and edits albums based on contextual prompts.', 'Privacy-first approach ensures processing happens on-device with zero cloud sharing.'],
    whyYouShouldCare: 'iPhoneユーザーのあなたは、日々の操作が大幅に効率化されそうです', isComplex: false
  },
  {
    id: '2', category: 'tech', title: 'Startups Race to Build Smaller, Cheaper AI Models', source: 'Silicon Valley Post', timeAgo: '6h ago', imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000', readTime: '4 min', vibe: 'curious',
    summary: ['OpenAI and Anthropic face new competition from startups building highly efficient mini-models.', 'These small models can run on local laptops without internet access.', 'They specialize in single tasks like coding or pure math, matching giant models in precision.'],
    whyYouShouldCare: 'PCのオフライン環境でも強力なAIが使える日が近づいています', isComplex: true,
    eli5Summary: ['今まで超大型のパソコンが必要だった賢いAIが、普通のノートパソコンに入るくらい小さくなりました。','ネットに繋がっていなくても、サクサク動かせます。']
  },
  {
    id: '3', category: 'tech', title: 'TSMC Begins Production of 2-Nanometer Chips', source: 'Hardware Daily', timeAgo: '12h ago', imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000', readTime: '5 min', vibe: 'positive',
    summary: ['Taiwan Semiconductor Manufacturing Co. successfully started trial runs for 2nm chips.', 'These chips promise a 15% speed increase and 30% power reduction over current 3nm tech.', 'Expected to be featured in next-generation high-end smartphones by 2027.'],
    whyYouShouldCare: '数年後のスマホは今よりさらにバッテリーが長持ちし、動作もサクサクになります', isComplex: false
  },
  {
    id: '4', category: 'tech', title: 'Major Password Manager Suffers Security Breach', source: 'Cyber News Check', timeAgo: '1d ago', imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000', readTime: '2 min', vibe: 'alert',
    summary: ['A widely used password manager reported unauthorized access to their cloud servers.', 'User vault data remains encrypted, but email addresses and billing data were exposed.', 'Company urges all users to rotate their master passwords immediately.'],
    whyYouShouldCare: 'パスワード管理アプリを使っている方は、念のためパスワードの変更をお勧めします', isComplex: false
  },
  // Business
  {
    id: '5', category: 'business', title: 'Federal Reserve Signals Potential Interest Rate Cuts by Q3', source: 'Financial Times', timeAgo: '4h ago', imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1000', readTime: '4 min', vibe: 'info',
    summary: ['Inflation data is showing consistent signs of cooling down closer to the 2% target.', 'Chairman Powell indicated small rate cuts could begin as early as September.', 'Markets reacted positively, with major indices seeing slight gains in afternoon trading.'],
    whyYouShouldCare: '住宅ローンなど、借り入れを検討している方には朗報となる可能性があります', isComplex: true,
    eli5Summary: ['インフレ（物価上昇）が落ち着いてきました。', '銀行のえらい人が「お金を借りる時の手数料を下げてもいいかも」と言っています。', 'みんな「やった！」と思って株をたくさん買ったので、株価が少し上がりました。']
  },
  {
    id: '6', category: 'business', title: 'Global Supply Chain Normalizes After 3 Years of Disruption', source: 'Economy Watch', timeAgo: '8h ago', imageUrl: 'https://images.unsplash.com/photo-1494412574643-fc480bdf6c77?auto=format&fit=crop&q=80&w=1000', readTime: '3 min', vibe: 'positive',
    summary: ['Shipping costs between Asia and Europe have finally returned to pre-pandemic levels.', 'Semiconductor and raw material shortages are officially declared resolved by major manufacturers.', 'Retailers are expected to pass on the savings through upcoming holiday discounts.'],
    whyYouShouldCare: 'ネット通販や家電の価格が少し安くなるかもしれません', isComplex: false
  },
  {
    id: '7', category: 'business', title: 'EV Sales Penetration Hits 25% Globally for the First Time', source: 'Auto Business', timeAgo: '18h ago', imageUrl: 'https://images.unsplash.com/photo-1593941707882-a5bba14938cb?auto=format&fit=crop&q=80&w=1000', readTime: '4 min', vibe: 'info',
    summary: ['One in four new cars sold worldwide last quarter was a pure electric vehicle.', 'China continues to lead the market, making up 60% of total global EV sales.', 'Legacy automakers are slashing prices on combustion engine vehicles to remain competitive.'],
    whyYouShouldCare: 'ガソリン車の値引きが拡大しており、車の買い替えには良いタイミングです', isComplex: false
  },
  {
    id: '8', category: 'business', title: 'Inflation Report Shows Unexpected Core CPI Jump', source: 'Wall Street Journal', timeAgo: '1d ago', imageUrl: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=1000', readTime: '5 min', vibe: 'negative',
    summary: ['Despite expectations, last month saw a 0.4% increase in core consumer prices.', 'Housing and insurance costs were the primary drivers of the inflation spike.', 'This completely dashes hopes for an immediate rate cut at the next central bank meeting.'],
    whyYouShouldCare: '家賃や保険料の値上がりがまだ続く可能性があります', isComplex: true,
    eli5Summary: ['安くなると思っていたモノの値段が、予想外に少し上がってしまいました。', '特に家賃や保険の値段が上がっています。', 'このせいで、国はお金を借りやすくするのを一旦やめることにしました。']
  },
  // World
  {
    id: '9', category: 'world', title: 'Historic Peace Deal Reached in the Horn of Africa', source: 'Global News Network', timeAgo: '3h ago', imageUrl: 'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&q=80&w=1000', readTime: '6 min', vibe: 'positive',
    summary: ['Rival nations signed a comprehensive treaty mediated by the African Union.', 'The agreement includes demilitarized border zones and shared access to vital ports.', 'International observers are optimistic, but caution that implementation will take years.'],
    whyYouShouldCare: '地域の安定化により、アフリカ支援プロジェクトがより安全に進行します', isComplex: false
  },
  {
    id: '10', category: 'world', title: 'European Union Passes Aggressive Anti-Plastic Legislation', source: 'EU Times', timeAgo: '9h ago', imageUrl: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=1000', readTime: '3 min', vibe: 'info',
    summary: ['All single-use plastic packaging will be strictly banned across the EU by 2030.', 'Supermarkets must offer refillable stations for common household items like shampoo.', 'The law imposes heavy fines on corporations failing to meet recycling quotas.'],
    whyYouShouldCare: '日本でも今後、スーパーでの詰め替え販売が当たり前になる未来の先駆けです', isComplex: false
  },
  {
    id: '11', category: 'world', title: 'Protests Erupt After Sudden Government Subsidy Cuts', source: 'World Watch', timeAgo: '16h ago', imageUrl: 'https://images.unsplash.com/photo-1529156069898-49953eb1b5e4?auto=format&fit=crop&q=80&w=1000', readTime: '4 min', vibe: 'alert',
    summary: ['Thousands took to the streets in the capital city protesting the removal of fuel subsidies.', 'Public transportation has been halted, and schools are temporarily closed.', 'The government cites pressure from international monetary funds to balance their budget.'],
    whyYouShouldCare: '該当地域への渡航・出張は延期を検討すべき状況です', isComplex: false
  },
  {
    id: '12', category: 'world', title: 'G20 Summit Concludes with Modest Climate Pledges', source: 'International Post', timeAgo: '1d ago', imageUrl: 'https://images.unsplash.com/photo-1560415755-bd80d06eda60?auto=format&fit=crop&q=80&w=1000', readTime: '5 min', vibe: 'curious',
    summary: ['Leaders agreed to "phase down" rather than "phase out" coal power, disappointing activists.', 'A new $50 Billion fund for climate adaptation in developing nations was established.', 'No concrete timelines were set for eliminating fossil fuel subsidies globally.'],
    whyYouShouldCare: '気候変動対策は進んでいますが、その速度については意見が分かれています', isComplex: true,
    eli5Summary: ['世界の代表が集まって、地球温暖化をどうするか話し合いました。', '「石炭を使うのを完全にやめる」とは約束できず、「徐々に減らす」ことになりました。', 'その代わり、貧しい国が気候変動に対処するためのお金を集めることになりました。']
  },
  // Science
  {
    id: '13', category: 'science', title: 'Breakthrough Study Links Gut Microbiome Patterns to Sleep Quality', source: 'Nature Health', timeAgo: '7h ago', imageUrl: 'https://images.unsplash.com/photo-1542385151-efd9000785a0?auto=format&fit=crop&q=80&w=1000', readTime: '5 min', vibe: 'curious',
    summary: ['Researchers identified specific gut bacteria diversity linked to deeper REM sleep.', 'Participants eating fermented foods showed a 20% improvement in sleep latency.', 'Findings suggest dietary interventions could treat mild insomnia.'],
    whyYouShouldCare: '最近よく眠れないと感じているなら、発酵食品を取り入れると効果があるかもしれません', isComplex: false
  },
  {
    id: '14', category: 'science', title: 'New Quantum Processor Breaks Error-Correction Record', source: 'Quantum Weekly', timeAgo: '8h ago', imageUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=1000', readTime: '6 min', vibe: 'positive',
    summary: ['A research team achieved a logical qubit error rate significantly lower than physical qubits.', 'This breakthrough utilizes a novel topological error correction code.', 'Brings the timeline for commercially viable quantum computers forward by several years.'],
    whyYouShouldCare: '将来的に全く新しい薬の開発や暗号技術に革命が起きる大ニュースです', isComplex: true,
    eli5Summary: ['「量子コンピューター」という超すごい計算機につきものだった「計算ミス」を減らす大発見がありました。', '新しい仕組みを使って、ミスを勝手に直してくれるようになりました。', 'これにより、超すごい計算機が実用化されるのが予定より早まりそうです。']
  },
  {
    id: '15', category: 'science', title: 'Astronomers Discover "Missing Link" Water-Rich Exoplanet', source: 'Space Today', timeAgo: '15h ago', imageUrl: 'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?auto=format&fit=crop&q=80&w=1000', readTime: '3 min', vibe: 'curious',
    summary: ['James Webb Space Telescope detected atmospheric water vapor on a rocky super-Earth.', 'The planet orbits in the habitable zone of its red dwarf star.', 'This discovery provides the first clear evidence that ocean-covered worlds are common.'],
    whyYouShouldCare: '宇宙に「第二の地球」とも言える海のある星が豊富にあることが分かりました', isComplex: false
  },
  {
    id: '16', category: 'science', title: 'CRISPR Gene Editing Used to Cure Hereditary Blindness', source: 'Medical Vision', timeAgo: '1d ago', imageUrl: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=1000', readTime: '4 min', vibe: 'positive',
    summary: ['Phase 3 clinical trials showed a 90% success rate restoring sight in patients with LCA genetic mutation.', 'The innovative therapy directly alters DNA inside the eye cells using a microscopic viral vector.', 'FDA approval is expected by late next year, offering hope to thousands.'],
    whyYouShouldCare: '遺伝性の病気が「治る病気」に変わる、医学界の歴史的な進化です', isComplex: true,
    eli5Summary: ['生まれつき目が見えない病気を治すための新しい治療法が成功しました。', '「クリスパー」という遺伝子のハサミを使って、目の細胞を直接手術するイメージです。', '来年には正式な治療として認可される見込みです。']
  },
  // Entertainment
  {
    id: '17', category: 'entertainment', title: 'Independent Film Sweeps Top Honors at Cannes Film Festival', source: 'Cinema News', timeAgo: '2h ago', imageUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=1000', readTime: '3 min', vibe: 'positive',
    summary: ['A low-budget drama shot entirely on an iPhone won the Palme d\'Or.', 'The film explores modern loneliness through an unconventional, silent narrative.', 'Critics are calling it a paradigm shift for what is considered prestige filmmaking.'],
    whyYouShouldCare: '誰もがスマホとアイデア一つで世界的な賞を取れる時代を象徴しています', isComplex: false
  },
  {
    id: '18', category: 'entertainment', title: 'Iconic 90s Band Announces Reunion World Tour', source: 'Culture Pop', timeAgo: '6h ago', imageUrl: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&q=80&w=1000', readTime: '2 min', vibe: 'info',
    summary: ['The legendary rock band will reunite for the first time in 20 years.', 'The tour will cover 40 cities globally starting next summer.', 'Pre-sale tickets caused major ticketing platforms to crash within minutes of going live.'],
    whyYouShouldCare: '青春時代の音楽に再び熱狂するチャンスです。チケット争奪戦には備えが必要です', isComplex: false
  },
  {
    id: '19', category: 'entertainment', title: 'Streaming Giants Agree to Consolidate Subscriptions', source: 'Tech Media', timeAgo: '14h ago', imageUrl: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&q=80&w=1000', readTime: '4 min', vibe: 'curious',
    summary: ['Three major streaming services will now offer a discounted "Mega Bundle".', 'The move is aimed at reducing subscriber churn amid subscription fatigue.', 'Users will access all three libraries through a single account login starting next month.'],
    whyYouShouldCare: '毎月の動画サブスクリプション代が節約できる可能性があります', isComplex: true,
    eli5Summary: ['ネットフリックスやアマプラのような動画配信サイト３つが手を組みました。', '別々に契約するより、まとめ買いセットのほうが安くなります。', '来月から、一つのパスワードで全部の映画が見られるようになります。']
  },
  {
    id: '20', category: 'entertainment', title: 'AI-Generated Song Tops Billboard Top 100', source: 'Music Charts', timeAgo: '1d ago', imageUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=1000', readTime: '3 min', vibe: 'alert',
    summary: ['A pop song entirely composed and sung by an AI prompt has hit #1 on the charts.', 'The creator, an anonymous teenager, merely typed a 2-sentence prompt into a generation tool.', 'The music industry is currently scrambling to update copyright laws to address this.'],
    whyYouShouldCare: '「音楽を作る＝人間」という常識が覆り、誰でも大ヒット曲を作れる時代が到来しました', isComplex: false
  }
];
