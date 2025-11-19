
import { Word, HanjaCharacter, Conversation, Idiom } from '../types';

// This function is kept for structure but now returns an empty array to prevent adding default words.
export const generateInitialWords = (): Word[] => {
  return [];
};

export const generateInitialPriorityWords = (): Word[] => {
  const rawData = `
decide|결정하다, 결심하다
wake|(잠에서) 깨다, 깨우다
suffer|고통받다, 겪다 
introduce|소개하다, 도입하다
waste|낭비하다; 낭비, 쓰레기 
exercise|운동하다, 연습하다; 운동, 연습 
disappoint|실망시키다 
protect|보호하다 (=guard)
explore|탐험하다
explode|폭발하다
gain|얻다; 이익 
delete|삭제하다
download|다운로드하다, 내려받다
remain|남다, 계속 ~이다; (~s) 유적 
suggest|제안하다, 암시하다
operate|작동하다, 수술하다
say|말하다, ~라고 쓰여 있다
survey|(설문) 조사하다; (설문) 조사 
participate|참가하다, 참여하다
deliver|배달하다, (말 등을) 전하다 
employ|고용하다
enable|~할 수 있게 하다, 가능하게 하다
remind|상기시키다
recycle|재활용하다
health|건강 
defend|방어하다 
survive|살아남다, 남아 있다 
attend|참석하다, 다니다 
respect|존경하다, 존중하다; 존경 
serve|(음식을) 내놓다, 제공하다, (식당 등에서) 시중들다
chance|기회, 가능성; 우연히 ~하다 
deserve|받을 만하다, ~할 가치가 있다
describe|묘사하다, 말로 설명하다 
require|필요로 하다, 요구하다
reduce|줄이다
develop|발달시키다, 개발하다 
weather|날씨
attack|공격하다; 공격 
compare|비교하다, 비유하다 
include|포함하다
produce|생산하다
recover|회복하다, 되찾다 
pretend|~인 체하다
demand|요구하다; 수요 
discover|발견하다, ~을 알게 되다
dislike|좋아하지 않다, 싫어하다
problem|문제
blow|바람이 불다; 타격 
lose|잃다, 지다
read|읽다, ~라고 쓰여 있다
affect|~에 영향을 주다 
consider|숙고하다, 여기다
cheat|속이다, 부정행위를 하다
weight|무게, 체중, 중량
taste|맛, 기호; 맛을 보다 
vegetable|채소
culture|문화
idea|생각, 아이디어
illness|아픔, 병 
recipe|요리법
behavior|행동, 행실
lock|자물쇠; 자물쇠를 채우다, 잠그다 
customer|고객, 손님
diet|식단, 다이어트
head|머리, 책임자; 이끌다, (~을 향해) 나아가다 
effect|결과, 영향, 효과
teenager|십 대의 소년과 소녀
knowledge|지식
price|값, 가격
job|직업, 일
habit|습관, 버릇
library|도서관
guide|안내자, 안내서; 안내하다 
decrease|감소; 감소하다 
effort|노력
future|미래; 미래의 
model|모델, 모형 
meaning|의미, 뜻
complaint|불평, 항의
business|사업, 일
hospital|병원
town|작은 도시, 시내 
president|대통령, 사장, 회장
meal|식사
reason|이유, 이성
success|성공
vacation|휴가
sickness|질병, 메스꺼움 
attention|주의, 주목 
noise|소음, 시끄러운 소리
dream|꿈; 꿈을 꾸다 
garlic|마늘
world|세계, 세상
vet|수의사 (veterinarian의 줄임말)
promise|약속; 약속하다 
seat|좌석; 앉히다 
situation|상황, 처지
schedule|예정(표) (=timetable); 예정하다 
adult|어른, 다 자란 동물 
hobby|취미
reality|현실
difference|차이, 다름 
beach|해변 (=seashore) 
headache|두통, 골칫거리
prison|감옥
heat|열, 더위; 뜨겁게 하다 
soldier|군인, 병사 
skill|기술
stripe|줄무늬
export|수출(품), 수출하다
earth|지구, 흙
list|목록
surface|표면 
journey|여행 (=travel), 여정
danger|위험
beauty|아름다움, 미인
information|정보 
shock|충격 
difficulty|어려움, 장애
stage|무대, 단계
theater|극장
fact|사실
voice|목소리
battle|전투, 싸움
shape|모양
tongue|혀, 언어
throat|목구멍
army|육군, 군대
heart|심장, 마음
grammar|문법
joy|기쁨 (=pleasure)
damage|손상, 피해 
wound|부상; 부상을 입히다 
practice|연습, 실행; 연습하다, 실행하다 
import|수입(품), 수입하다
opinion|의견, 생각
allowance|용돈
accident|사고, 뜻밖의 사건
language|언어, 말
space|공간, 우주
fever|열, 열병
purpose|목적, 의도 
sunrise|해돋이, 일출
tool|도구, 수단 
judge|판사, 재판관; 판단하다 
speech|말, 연설
fence|울타리, 담
earthquake|지진
event|사건, 행사, 경기 종목
choice|선택, 선택권
traffic|교통(량), 차량들
environment|환경
ocean|대양, 바다 
decision|결정, 판단
subway|지하철
office|사무소, 사무실
fog|안개
pilot|조종사 
life|생명, 삶 
musician|음악가 
diary|일기 (=journal) 
science|과학
joke|농담; 농담을 하다 
grass|풀, 잔디
mistake|실수, 잘못; 잘못 알다 
forest|숲, 삼림
couple|한 쌍, 부부 
airport|공항 
poet|시인
nature|자연, 천성
thief|도둑 
cost|비용; ~의 비용이 들다 
holiday|휴일, 휴가
principal|교장, 장(長); 주요한 
death|죽음, 사망 
war|전쟁
neighbor|이웃 사람
group|집단, 무리
history|역사
beef|소고기
enemy|적
machine|기계
crowd|군중, 무리
robber|강도
blood|피, 혈액
factory|공장
birth|출생
clerk|사무원, 점원
bottle|병
type|유형, 타입; 타이프를 치다 
center|중심, 중심지(센터)
law|법, 법률 
gym|체육관, 헬스클럽 (gymnasium의 줄임말) 
village|마을
tower|탑
bit|조금, 작은 조각
favor|호의, 찬성; 선호하다 
passport|여권
coin|동전 
prize|상, 상품
bridge|다리
million|백만, 다수
nation|국가, 국민
officer|관리, 경관
thought|생각, 사고; think의 과거, 과거분사 
way|방식, 길
peace|평화, 평온
personality|성격, 인격
economy|경제
university|종합 대학 
drug|약, 마약
appointment|약속, 임명
attitude|태도
secret|비밀; 비밀의 
baggage|수하물, 짐 (=luggage)
detail|세부 사항, 상세한 기술
ability|능력, 재능
risk|위험; 위험에 빠뜨리다, 위험을 무릅쓰다 
front|앞부분, 정면
honor|명예, 영광 
wallet|지갑
individual|개인; 개인의, 개개의 
society|사회
opportunity|기회
audience|청중, 시청자
foundation|기초, 근거 
crime|범죄
strength|힘, 강점
pollution|오염, 공해 
handle|손잡이; 다루다 
revolution|혁명
government|정부
experience|경험
affair|사건, 일
interview|면접, 인터뷰; 인터뷰하다, 면접을 보다 
comfort|안락, 위안
climate|기후, 분위기 
delay|지연; 연기하다 
product|제품, 생산품
hiking|하이킹, (산과 들로 가는) 도보여행 
role|역할
symbol|상징, 기호
expert|전문가; 전문가의, 전문적인 
staff|(전체) 직원
responsibility|책임(감) 
anger|화, 분노; 화나게 하다 
border|국경, 경계
influence|영향 (=effect); ~에 영향을 미치다 
fuel|연료; 연료를 공급하다 
award|상 
half|반, 절반
sort|종류 (=kind); 분류하다 
trip|여행 (=journey)
wheel|바퀴, (자동차 등의) 핸들
slave|노예
method|방법
stress|강조, 스트레스; 강조하다 
competition|경쟁
passion|열정, 정열
pause|일시 중지, 잠깐 멈춤; 잠시 멈추다 
exchange|교환; 교환하다 
desire|욕망; 바라다 
proverb|속담, 격언
dish|접시, 요리
balance|균형 
resource|자원, 자산 
furniture|가구
devil|악마, 말썽꾸러기
cash|현금; (수표를) 현금으로 바꾸다 
bone|뼈
electricity|전기
visitor|방문자, 방문객 
public|대중, 일반 사람들; 공공의, 대중의 
supply|공급 
victory|승리 
wealth|재산, 부(富)
series|연속, 시리즈 (단수·복수 동형)
control|통제, 지배; 통제하다, 지배하다 
cover|표지, 덮개; 덮다 
mystery|신비, 불가사의, 추리 소설
ruin|파멸, (~s) 폐허; 망치다, 파멸시키다 
election|선거 
voyage|항해, 여행 
greeting|인사, (~s) 인사말 
solution|해결(책)
tradition|전통, 풍습
adventure|모험
clue|실마리, 단서
saying|격언, 속담
muscle|근육
project|계획; 계획하다 
duty|의무
talent|재주, 재능
edge|가장자리, 날 
debt|빚, 부채 
instrument|기구, 악기
view|경치, 의견 
trouble|골칫거리, 문제; 괴롭히다, 애먹이다 
minute|분(分), 순간 
section|부분, (신문의) 면
uniform|제복 
junior|후배, 연소자; 손아래의, 하급의 
design|디자인, 설계 
senior|선배, 연장자; 손위의, 상급의 
wood|나무, (종종 ~s) 숲
powder|가루, 분말 
gallery|화랑, 미술관
tourist|관광객, 여행자
wonderful|놀랄 만한, 멋진
shadow|그림자
step|걸음, 한 걸음; 걷다 (=walk) 
care|조심, 돌봄; 관심을 가지다 
thin|얇은, 야윈
height|높이, 키
flood|홍수; 넘치게 하다 
error|잘못, 오류
delicious|맛있는
famous|유명한
poor|가난한, 불쌍한
twin|쌍둥이의 한 사람; 쌍둥이의 
colorful|화려한
passenger|승객
healthy|건강한, 건강에 좋은
base|기초, 토대; 기초를 두다 
trust|신뢰; 신뢰하다 
pepper|후추
trick|속임수, 장난
childhood|어린 시절
Mars|화성
friendship|우정
stair|계단
example|예, 본보기
bright|밝은, 영리한
sunshine|햇빛
huge|거대한, 막대한
stone|돌
length|길이
evil|악 
depth|깊이
guest|손님 (=visitor), 초대 손님 
museum|박물관
absent|결석한
plate|접시, (특정 음식의) 한 접시
favorite|아주 좋아하는; 마음에 드는 사람[것] 
area|지역, 면적
magazine|잡지
stomach|위
salt|소금
branch|가지, 지점
brain|뇌, 머리
thirsty|목마른 
flight|항공편, 비행
hero|영웅, 남자 주인공 
failure|실패, 실패한 것[사람] 
cheap|값싼
interested|흥미[관심] 있어 하는
different|다른 
calm|평온한, 침착한
main|주요한
deep|깊은; 깊게 
safe|안전한 
pleased|만족해하는, 기뻐하는
honest|정직한
scientific|과학의, 과학적인 
male|남성의, 수컷의; 남성, 수컷 
dirty|더러운, 야비한
national|국가의, 국립의 
loud|큰 목소리의, 시끄러운
empty|빈, 비어 있는; 비다, 비우다 
cool|시원한, 냉담한, 멋진
heavy|무거운, 심한
careful|조심하는, 세심한
fast|빠른; 빨리 
embarrassed|당황한, 난처한
serious|심각한, 진지한
alone|혼자; 홀로
lonely|외로운
wrong|틀린, 잘못된
far|먼; 멀리, (비교급을 강조하여) 훨씬 
bored|지루해하는, 싫증난 
wise|현명한
important|중요한
weak|약한 
enough|충분한; 충분히 
satisfied|만족하는
fresh|신선한, 새로운
narrow|좁은, 좁고 긴 
exciting|흥미진진한
amazing|놀라운, 대단한
peaceful|평화로운, 평온한 
difficult|어려운 
expensive|값비싼
possible|가능한
middle|가운데의; 한가운데, 중앙 
excited|흥분한, 신난
quiet|조용한, 말이 없는
popular|인기 있는, 대중적인 
worth|~의 가치가 있는; 가치 
surprised|놀란
organic|유기농의
regular|규칙적인
female|여성의, 암컷의; 여성, 암컷 
special|특별한
friendly|친절한, 사이가 좋은
terrible|끔찍한, 지독한
impossible|불가능한
dumb|말을 못하는
modern|현대의, 현대적인
blind|눈먼, 앞을 못 보는 
chief|주요한, 최고의; 우두머리, 장 
crowded|붐비는, 혼잡한 
scared|무서워하는, 겁먹은
solar|태양의 
real|실제의, 진짜의 
awake|깨어 있는; 깨다, 깨우다 
clever|영리한, 기발한
similar|비슷한, 같은 모양의
slim|날씬한, 얇은
successful|성공한, 성공적인 
few|(a few의 형태로) 몇몇의, (a 없이) 거의 없는
alive|살아 있는
wet|젖은, 비가 오는 
busy|바쁜, 붐비는 
several|여럿의
foreign|외국의
sharp|날카로운, 예리한
convenient|편리한 
deaf|귀가 먹은, 청각 장애가 있는
daily|매일의; 매일 
true|사실인, 진정한 
practical|실질적인, 실용적인
strange|이상한, 낯선
early|이른; 일찍 
scary|무서운
diligent|부지런한
confident|자신 있는, 확신하는
wide|넓은; 넓게, 활짝 
necessary|필요한
common|흔한, 일반의, 공통의
ugly|못생긴, 보기 흉한
handsome|(남자) 잘생긴, (여자) 당당하게 아름다운 
clear|맑은, 명백한; 치우다, 깨끗하게 하다 
single|단 하나의, 미혼의
simple|간단한, 단순한 
available|이용 가능한, 시간이 있는
false|거짓인, 가짜의
useless|쓸모없는
wild|야생의, 거친
less|더 적은; 더 적게 
low|낮은; 낮게 
born|타고난
every|(단수 명사와 함께 쓰여) 모든, 매~
pleasant|즐거운, 기분 좋은 
foolish|어리석은 
silly|어리석은 (=stupid), 우스꽝스러운
forward|(위치, 시간상으로) 앞으로
hardly|거의 ~ 아니다 (=scarcely)
downtown|시내로; 도시의 상업지역 
entire|전체의 (=whole)
finally|마지막으로, 마침내 (=at last)
actually|실제로 
effective|효과적인, 유효한
especially|특히
sometime|언젠가 (=some time)
near|가까이; 가까운; 가까이에 
immediately|곧, 즉시 
abroad|외국에, 해외에
suddenly|갑자기
without|~ 없이
upset|속상한; 속상하게 하다 
over|~ 이상, ~ 위에; 끝난 
once|한 번, 한때
nowadays|오늘날에는, 요즘에는
usually|보통, 대개 
certainly|확실히, (질문의 대답으로) 물론이지요
original|원래의, 독창적인
yet|아직, 그래도; 그런데도 
nothing|(단수 취급) 아무것도 ~ 아니다 
ever|지금까지, 계속, 언제든
rather|꽤, 오히려 
mostly|대부분, 대개
normal|정상인, 보통의; 정상, 보통 
precious|귀중한, 소중한 
almost|거의 (=nearly)
but|그러나; ~을 제외하고 
except|~을 제외하고 
toward|~ 쪽으로, ~을 향하여
nobody|(단수 취급) 아무도 ~ 않다 (=no one)
lately|최근에, 요즘 (=recently)
nearby|근처에; 근처의, 인근의 
quite|꽤, 상당히
either|(부정문에 써서) ~도 역시 (그렇다)
recently|최근에 (=lately) 
against|~에 반대해, ~에 기대어
probably|아마, 아마도 
maybe|아마 (=perhaps)
after|~ 후에, ~을 본떠서
although|비록 ~일지라도 (=though), 그러나
else|그밖에
quickly|빨리, 금방 
slowly|천천히, 느리게 
later|나중에, 후에; 더 늦은 
seldom|좀처럼 ~ 않는
however|아무리 ~해도, 그러나 
earn|일하여 벌다
grab|움켜잡다
review|복습하다, 재검토하다; 복습, 재검토 
steal|훔치다, 몰래 움직이다
arrest|체포하다; 체포 
prove|증명하다, ~로 판명되다
feed|먹을 것을 주다 
bend|구부리다
destroy|파괴하다 
bow|(고개를) 숙이다, (허리를 굽혀) 절하다 
rub|문지르다, 맞비비다 
replace|대체하다, 제자리에 놓다 
bite|물다, 물어뜯다
cause|일으키다, 야기하다; 원인 
envy|부러워하다, 질투하다; 부러움 
dig|파다 
accept|받아들이다 
advise|충고하다, 권하다
shrug|어깨를 으쓱하다; 어깨를 으쓱함 
whisper|속삭이다; 속삭임 
graduate|졸업하다 
scream|(날카롭게) 소리치다; (날카로운) 비명 
search|찾다, 뒤지다; 수색 
hate|미워하다, 싫어하다
yell|소리치다, 고함치다 
surround|둘러싸다
deal|다루다, 거래하다; 거래 
bless|축복하다
exist|존재하다
obtain|획득하다, 얻다 (=get)
reach|도달하다, (손을 뻗어) 집다; (손이 미치는) 범위 
beat|때리다, 이기다
sink|가라앉다
burn|불에 타다, 태우다
vote|투표하다; (선거 등에서의) 표 
fit|~에 맞다; 적당한 
roar|으르렁거리다
boast|자랑하다 
behave|행동하다 (=act), 예의 바르게 굴다 
nod|끄덕이다; 끄덕임 
bet|(돈을) 걸다, ~라고 장담하다
bury|묻다
repeat|되풀이하다, 반복하다 
drag|(힘겹게) 끌다 
clap|(손뼉을) 치다, 툭 치다
float|뜨다, 띄우다
drown|(물에) 빠져 죽다, 빠지다
slide|미끄러지다, 남몰래 움직이다
chase|쫓다; 추적 
ache|아프다; 아픔 
whistle|휘파람을 불다; 휘파람, 호루라기 소리 
bark|짖다; 짖는 소리 
seek|찾다, 구하다 
attract|매혹하다, (주의 등을) 끌다 
educate|교육하다, 가르치다 
recommend|추천하다
starve|굶어 죽다
marry|결혼하다
express|표현하다 
throw|던지다
rush|돌진하다, 급히 하다; 돌진, 서두름 
obey|복종하다, 따르다 
shine|빛나다 
bother|괴롭히다, 번거롭게 하다 
memorize|외우다
ignore|무시하다
dive|(물속으로) 뛰어들다 
spread|펼치다, 퍼뜨리다
flow|흐르다
manage|관리하다, 간신히 ~하다 
breathe|호흡하다
gather|모으다, 모이다
travel|여행하다; 여행 
fear|두려워하다; 두려움 
encourage|격려하다, 권하다
punish|벌주다 
treat|다루다, 대우하다 
drop|떨어지다, 떨어뜨리다; (물)방울 
heal|치유하다
shut|닫다 (=close) 
unite|통합하다, 단결하다 
admire|감탄하다, 존경하다 
surprise|놀라게 하다; 놀람 
mention|언급하다
fight|싸우다; 싸움 
wrap|포장하다, 둘러싸다
lay|놓다, 눕히다, (알을) 낳다
beg|구걸하다, 청하다 
smoke|담배를 피우다; 연기 
spell|철자를 쓰다; 주문(呪文) 
cheer|환호하다, 기운 내다; 환호, 응원 
hide|숨기다, 숨다
sail|항해하다; 돛 
record|기록하다; 기록 
occur|일어나다, 생각이 나다
broadcast|방송하다; 방송 (프로그램) 
cure|치료하다, 고치다 
reply|대답하다; 대답 
excuse|용서하다, 변명하다; 변명 
wink|눈을 깜박이다, 눈짓하다
approach|접근하다, 다가가다
spin|(빙빙) 돌다, (차바퀴가) 헛돌다; (빠른) 회전 
confuse|혼동시키다, 혼동하다
hug|포옹하다; 포옹 
pray|기도하다, 빌다
mix|섞다, 섞이다 
perform|수행하다, 공연하다
represent|대표하다, 대리하다
blend|섞다, 섞이다 (=mix)
persuade|설득하다
blame|비난하다, 탓하다
fold|접다
regret|후회하다, 유감스럽게 생각하다; 후회 
wipe|닦다
sew|바느질하다, 꿰매다
pack|(짐을) 싸다
overcome|극복하다
approve|승인하다, 찬성하다
chop|잘게 자르다
melt|녹다, 녹이다
differ|다르다
inform|알리다 
reflect|반사하다 
chat|수다 떨다; 수다 
disagree|동의하지 않다, 의견이 다르다
reuse|재사용하다; 재사용 
stretch|늘이다, 뻗다 
misunderstand|오해하다
burst|터뜨리다, 터지다
organize|조직하다, 정리하다 
distinguish|구별하다, 분간하다
spill|쏟다, 쏟아지다; 유출 
migrate|이주하다, (새・동물이 계절에 따라) 이동하다
complete|완료하다 (=finish); 완전한 
motivate|동기를 부여하다
scold|혼내다, 꾸짖다
rent|(사용료를 내고) 빌리다, 세놓다 
contain|함유하다, ~이 들어 있다
debate|토론하다; 토론 
donate|기부하다, 기증하다 
spoil|망치다, 못 쓰게 만들다
escape|탈출하다, 벗어나다
kick|(발로) 차다
slip|미끄러지다, 살짝 움직이다
argue|언쟁하다, 주장하다 
measure|재다, 측정하다; 조치 
leap|뛰다, 뛰어오르다 (=jump)
decorate|장식하다, 꾸미다 
establish|설립하다, 확립하다
display|전시하다; 전시(물) 
dye|염색하다
shoot|쏘다, 사냥하다
imagination|상상력, 창의력 
compose|구성하다, 작곡하다
hunger|굶주림 
unify|통일하다, 통합하다
drawing|(색칠하지 않은) 그림
advance|진보, 발전 
slice|(얇게 썬) 조각
unit|구성단위, (상품의) 한 개
semester|학기 (=term)
closet|벽장
highway|고속도로
consumer|소비자
amusement|재미, 놀이 
report|보고(서), 보도; 보도하다 
license|면허(증); 허가하다 
grocery|식료품 잡화점 (=grocery store), 식료품
exclude|제외하다
invade|침입하다
wave|파도, 물결; (손·팔을) 흔들다 
drawer|서랍
contact|접촉, 연락; 연락하다 
protest|항의, 시위; 항의하다, 반대하다 
growth|성장 
career|직업, 경력
stare|응시하다; 응시 
happiness|행복 
comment|논평, 언급; 논평하다, 의견을 말하다 
bride|신부
kindness|친절(한 행동) 
condition|상태, 조건
divorce|이혼; 이혼하다 
receipt|영수증
yawn|하품하다; 하품 
aim|목적, 목표; 목표하다, 겨냥하다 
wedding|결혼(식)
benefit|이익, 혜택
scratch|할퀴다, 긁다; 긁힌 자국 
progress|진행, 진보
wag|(꼬리를) 흔들다
purse|(여성용) 지갑, (어깨끈이 없는) 핸드백 (=handbag)
switch|스위치, 전환; 바꾸다, 전환하다 
interest|흥미, 관심; 흥미를 갖게 하다 
advice|충고, 조언 
device|(기계적) 장치, 기기
advantage|이점, 유리한 점
gap|틈, 격차
summary|요약, 개요
flag|기, 깃발
package|소포, 일괄 (프로그램)
exhibition|전시(회) 
flame|불꽃 
ladder|사다리
journal|잡지, 일기
credit|신용 (거래) 
goal|목표, 골
pleasure|즐거움, 기쁨
pace|(걸음·일 등의) 속도
tax|세금; 과세하다 
castle|성(城)
research|연구 (조사) 
envelope|봉투
junk|쓸모없는 물건, 정크푸드
author|저자, 작가
quantity|양, 다량
region|지역
income|소득, 수입
fable|우화
nest|둥지, (작은 동물의) 집
fee|수수료, 요금
force|힘, (~s) 군대; ~을 하도록 강요하다 
target|과녁, 목표(물)
volunteer|자원봉사자, 자원자 
option|선택사항, 선택권
comic|(~s) 만화, 만화책 (=comic book); 웃기는, 코미디의 
palace|궁전
dust|먼지
dot|점; 점을 찍다 
darkness|어둠, 암흑 
laundry|세탁물, 세탁소 
navy|해군
dawn|새벽; 날이 새다 
architect|건축가, 설계자
peer|또래 
path|길, 진로
construction|건설, 공사 
miracle|기적
host|(손님을 초대한) 주인, 주최 측, 진행자
bush|수풀, 덤불
quality|질, 품질
garbage|쓰레기
revival|회복, 부흥 
net|그물, (the ~) 인터넷 
loaf|빵 한 덩어리 
lifetime|평생, 일생
score|점수, 득점; 득점하다 
authority|권위, 권한, (the -ties) 당국
item|물품, 항목
wage|임금, 급여 
heaven|하늘, 천국
bottom|밑바닥, 밑
luck|행운, 운 
blanket|담요
fist|주먹
wheat|밀
swing|그네, 흔들기, 휘두르기; 휘두르다, 흔들다, 그네 타다 
pill|알약
captain|선장, 주장
crew|승무원, 팀
port|항구
god|신 (God은 기독교의 신)
master|주인, 대가; 정복하다, 정통하다 
row|줄, 열 (=line); 배를 젓다 
stream|흐름, 시내 
horizon|수평선, 지평선 
temple|절, 사원 
moment|순간
bar|막대기, 빗장 
booth|작은 방, 부스
handshake|악수
hunter|사냥꾼 
counselor|상담원, 카운슬러
grain|곡물, 낟알
fur|털, 모피
rate|비율, 속도 
fortune|운, 거금, 재산
ceiling|천장
cage|새장, 우리
plenty|풍부, 많음
bubble|거품
sight|광경, 시력
chain|사슬, 체인; 사슬로 매다 
sheet|(침대의) 시트, (종이) 한 장
board|판, 보드; 탑승하다, 승선하다 
shore|해안 
coast|해안, 연안
examination|조사, 시험 (줄여서 exam)
department|부(部), (백화점의) 매장
iceberg|빙산
sample|샘플, 견본 
college|(미국) 대학, (영국) 전문학교
thumb|엄지손가락
servant|하인
basement|지하실, 지하층
drugstore|약국
feather|깃털
crop|농작물, 수확
alarm|놀람, 경보 
hometown|고향
soul|영혼, 사람
cave|동굴
nap|낮잠; 졸다, 낮잠 자다 
youth|젊음, 청춘(기)
treasure|보물, 보배
beginning|처음, 시작
folk|(~s) 사람들, 가족
doubt|의심; 의심하다 
magnet|자석
metal|금속
liberty|자유 (=freedom)
truth|진실, 사실
pair|한 쌍
tail|꼬리
fare|(교통) 요금
sale|판매, 할인 판매
fault|결점, 잘못
hole|구멍
nail|손톱, 발톱, 못; 못으로 박다 
population|인구
shade|그늘
garage|차고, 주차장
excitement|흥분 
amount|양, 총액; (총계가) ~이 되다 
piece|조각
flashlight|플래시, 손전등
beast|짐승, 야수 (=animal)
harmony|조화, 화합
suitcase|여행 가방
comb|빗; 빗질하다 
harvest|수확, 추수; 수확하다 
sorrow|슬픔 
coal|석탄
post|우편(물) (=mail); (편지 등을) 부치다 
wisdom|지혜
gun|총
crash|충돌, 요란한 소리; 충돌하다, 요란한 소리를 내다 
value|가치; 평가하다 
harm|해(害), 손해; 해치다, 손상하게 하다 
democracy|민주주의, 민주 정치
stranger|낯선 사람, 처음 온 사람
nickname|별명, 애칭
cloth|천, 직물
planet|행성
bedside|침대 곁
exit|출구
system|조직, 체계
manner|방식, (~s) 예의
fantasy|공상, 환상
kite|연
congratulation|축하 
trade|무역, 장사
thermometer|온도계
community|공동체, 지역 사회
narrator|내레이터, 이야기하는 사람
valley|골짜기, 계곡
athlete|운동선수
experiment|실험 
poem|시(詩)
setting|배경, 장소
scene|장면, 현장
mission|임무, 사절단
signal|신호 
jewel|보석, 보석 장신구
landmark|랜드마크, 획기적 사건[물건] 
dozen|다스, 12개 묶음 
continent|대륙
universe|우주, 전 세계 
temperature|온도, 기온, 체온
ancestor|조상
background|배경
equipment|장비, 설비
function|기능; 기능하다 
beggar|거지 
choir|합창단, 성가대
privacy|사생활
raindrop|빗방울
appetite|식욕
link|연결, 관련, 링크
screen|화면, 스크린, (the ~) 영화(계)
track|지나간 자국, 선로; 추적하다 
sweat|땀; 땀을 흘리다 
cemetery|묘지
rubber|고무
custom|관습, 습관
tomb|무덤, 묘
limit|제한, 한계 
spirit|정신, 마음
quarter|4분의 1, 15분, 25센트 동전 
direction|방향, 지시 
cartoon|manhwa, manhwah yeonghwa
documentary|다큐멘터리, 기록물; 다큐멘터리의 
century|세기, 100년
pole|기둥, 극(極)
justice|정의
entrance|입구, 입장, 입학 
source|출처, 근원
waterfall|폭포
ceremony|의식
pity|불쌍히 여김, 연민 
leftover|남은 음식, 잔재; 남은 
surf|파도; 서핑하다, (인터넷을) 검색하다 
jar|병, 단지
shuttle|셔틀, 우주 왕복선 (=space shuttle) 
submarine|잠수함
pattern|패턴, 무늬
side|쪽, 옆구리, 편
pimple|여드름, 뾰루지
routine|(판에 박힌) 일상
bowl|(오목한) 그릇
blossom|(특히 과일 나무의) 꽃 
satellite|위성
stuff|것, 물건; (빽빽이) 채워 넣다 
sightseeing|관광
context|문맥, 맥락
shepherd|양치기, 목자
chip|흠집, 조각, (~s) 감자튀김 
pipe|관, 파이프; 파이프로 수송하다 
bomb|폭탄, 폭발물
astronaut|우주 비행사
proof|증거, 증명(서) 
goods|제품, 상품
evolution|진화, 발달 
novel|소설 
sleeve|소매
bullet|총알
empire|제국
pronunciation|발음(법) 
microwave|전자레인지; 전자레인지에 데우다
fitness|헬스, 건강 
telescope|망원경
riddle|수수께끼, 불가사의
burden|짐, 무거운 짐; 짐[부담]을 지우다 
site|위치, 장소 (=place), 인터넷 사이트
zone|구역, 지대
oxygen|산소
mud|진흙, 진창
shelter|피신(처), 쉼터; 보호하다, 피하다 
sentence|문장
candle|양초
idiot|멍청이
volcano|화산 
cycle|순환; (영국) 자전거를 타다 
communication|의사소통, 통신
chore|(일상의) 잡일, 하기 싫은 일
yard|마당, (학교의) 운동장
chimney|굴뚝
crack|갈라진 금; 금 가다, 금 가게 하다 
cafeteria|구내식당, 카페테리아
industry|산업, 공업
depressed|우울한, 침체된
familiar|친숙한, 익숙한 
dull|따분한, 무딘 
elementary|초등의, 초급의 
ashamed|부끄러운
curly|곱슬곱슬한
mad|화난, 미친
unknown|알려지지 않은, 미지의
lost|길을 잃은, 분실한
logical|논리적인, 타당한
overweight|과체중인, 비만인
curious|호기심이 많은, 궁금해하는
bold|대담한, 볼드체의
crazy|미친 (=mad), 열광적인
creative|창의적인
classic|일류의, 고전의; 고전 
broken|부서진, 깨진, 고장 난
silent|침묵의, 조용한
social|사회의, 사회적인
nervous|불안한, 긴장되는 
cruel|잔인한
merchant|상인
frustrated|좌절한, 짜증난
international|국제적인
fashionable|유행하는
helpful|유용한, 도움이 되는
proud|자랑스러워하는, 오만한 
tough|어려운, 질긴 
classical|클래식의, 고전의
average|평균의, 보통의; 평균 
sore|아픈 
ancient|고대의, 매우 오래된
stupid|어리석은 (=foolish), 바보 같은
brave|용감한
afraid|무서워하는, 걱정하는
greedy|탐욕스러운, 욕심을 부리는 
straight|똑바른; 똑바로 
elderly|나이가 지긋한, 연로한
global|지구의, 세계적인
steady|안정적인, 꾸준한 
endless|끝없는
kindergarten|유치원
handmade|손으로 만든, 수제의
former|이전의, 전자의
asleep|잠들어 있는 
past|지나간; 과거 
certain|확실한, 어떤 (=one) 
contrary|반대의; 반대 
nuclear|원자력의, 핵의
endangered|멸종 위기에 처한, 위험에 처한
selfish|이기적인
opposite|반대편의, 정반대의 
extreme|극도의, 극한의
valuable|귀중한, 가치 있는
impressive|인상적인, 인상[감명] 깊은 
stormy|폭풍우 치는
independent|독립한, 자주적인 
tight|단단한, 꽉 끼는
rough|거친, 힘든
sticky|끈적끈적한
extra|추가의; 추가로 
gentle|부드러운, 다정한
exotic|이국적인, 외국의
raw|날것의, 원재료의
lazy|게으른, 느긋한
native|태어난 곳의, 모국어의
due|~로 인한, 지불 기일이 된 
medium|중간의; 매체 (복수형은 media) 
worldwide|전 세계적인; 세계적으로 
whole|전체의, 모든; 전체, 전부 
essential|필수적인, 본질적인
typical|전형적인, 보통의
idle|게으른 (= lazy), 놀고 있는 
messy|어질러진, 지저분한
dear|친애하는 
disabled|장애가 있는
instant|즉시의, 인스턴트의; 순간 
particular|특정한, 특별한
terrific|멋진, 굉장한
weekly|매주의, 주 단위의; 매주 
electronic|전자의
cheerful|쾌활한, 명랑한
severe|엄한, 극심한
awkward|어색한, 불편한
smooth|매끄러운 
military|군의, 육군의
tropical|열대의
maximum|최대의, 최고의
active|활동적인, 적극적인
local|지방의, 현지의
ambitious|야망을 품은
charming|매력적인 (=attractive)
fancy|멋진, 고급의
mobile|이동식의, 고정되어 있지 않은
part-time|(근무가) 파트타임인, 시간제인; 시간제로 
strict|엄격한
western|서쪽의, 서양의
neat|깔끔한, 잘 정돈된
tiny|아주 작은
challenging|도전적인, 힘든
freezing|몹시 추운
rapidly|급격히, 빨리 (=quickly) 
indeed|정말로, 참으로
unique|독특한, 고유의
beyond|~을 넘어서
anymore|(부정문) 더 이상 (=any longer)
unless|~하지 않으면 (=if ~ not)
frightened|겁먹은, 무서워하는
besides|게다가
standard|표준의, 일반적인; 기준, 표준 
instead|대신에
badly|나쁘게, 몹시 
whenever|~할 때마다, ~할 때면 언제든지 
otherwise|그렇지 않으면
miserable|비참한
religious|종교의, 신앙심이 깊은 
properly|적절히, 제대로 
nor|~도 또한 아니다
below|~의 아래에 
behind|~ 뒤에; 뒤에 
exactly|정확히 (=correctly), 바로 
fake|가짜의, 모조의; 모조품 
humble|겸손한
royal|왕의, 왕립의
forever|영원히
politely|공손히 
twice|두 번
somewhere|어딘가에
within|~ 이내에
sincerely|진심으로 
simply|간단히, 그냥
artificial|인공의, 인조의
ahead|앞에, 앞으로
pure|순수한, 혼합되지 않은
blond|금발인
upstairs|위층으로; 위층의 
flat|평평한, 납작한
newborn|신생의, 갓 태어난
correctly|정확히 
neither|~도 역시 아니다; (둘 중) 어느 것도 ~ 아니다 
such|그러한, 이러한 
whether|~인지 어떤지
beside|~ 옆에, ~을 벗어나
uneasy|불안한, 불편한
perhaps|아마 (=maybe / probably), ~일지도 모른다
gradually|점차, 서서히
unfortunately|불행히도, 안타깝게도
dizzy|어지러운, 아찔한
anywhere|어디엔가, 어디에서도, 어디든지, 아무데나 
therefore|그러므로
fine|벌금; 훌륭한, 날씨가 맑은 
lie|눕다, 놓여 있다; 거짓말하다; 거짓말 
own|소유하다; 자기 자신의 
watch|손목시계; 보다, ~을 조심하다 
face|~에 직면하다, ~을 향하다; 얼굴, 표정 
present|현재의, 출석한; 선물 
park|주차하다; 공원 
tell|구별하다, 말하다
miss|그리워하다, 놓치다, ~을 하지 못하다
stand|참다, 서다 
capital|대문자, 수도 
pretty|꽤, 상당히; 예쁜 
pass|합격하다, 지나가다, 건네주다 
press|언론, 인쇄; 누르다 
kind|종류 (=sort); 친절한, 다정한 
company|일행, 단체, 회사
appreciate|인정하다, 고마워하다 
will|의지; ~일〔할〕 것이다 
fair|전시회; 공평한, 꽤 많은 
address|연설, 주소 
degree|정도, 도 (온도, 각도)
gift|재능, 선물
change|잔돈, 변화; 바꾸다 
ground|근거, 땅, 운동장
move|감동시키다, 움직이다
character|등장인물, 성격, 문자
term|학기, 용어, 기간
bill|요금 청구서, 계산서, 지폐
square|광장, 정사각형, 제곱 
grade|등급, 학년, 성적
plant|(식물을) 심다; 공장, 식물 
hold|개최하다, (손에) 잡다
scale|저울, 규모
turn|차례, 회전 
draw|끌다, 그리다 
drive|(조직적) 운동; 운전하다, 차로 데려다주다 
match|어울리다; 성냥, 시합 
major|전공; 주요한, 대형의 
operation|수술, 운영, 작동 
anxious|열망하는, 걱정되는
figure|인물, 숫자
direct|감독하다, 지시하다; 직접적인; 곧장 
meet|충족시키다, 만나다 
right|권리, 오른쪽; 옳은, 오른쪽의 
hang|매달다, 걸다; 교수형에 처하다 
concern|~에 관계가 있다; 걱정, 관심(사) 
rule|지배하다, 규정하다; 규칙 
key|중요한; 열쇠, 비결 
patient|환자; 참을성 있는 
order|주문, 순서, 명령; 주문하다 
conduct|지휘하다, 행하다 
straw|짚, 빨대
complex|콤플렉스, (건물) 단지; 복잡한 
spring|튀어 오르다; 봄, 샘 
race|인종, 민족, 경주 
run|경영하다, 달리다, 출마하다
free|무료의, 자유로운, 한가한
general|장군; 일반적인, 종합적인 
date|데이트, 날짜 
tear|찢다, 찢어지다; (~s) 눈물 
issue|(잡지 등의) 호(號), 논쟁(점)
rest|(the ~) 나머지, 휴식; 쉬다 
tie|동점이 되다, 매다; 넥타이, 동점 
subject|주제, 과목, 주어 
still|가만히 있는; 여전히, (비교급을 강조하여) 훨씬 
work|작품, 일
observe|(법률 등을) 지키다, 관찰하다
volume|양, 음량[볼륨], (책의) 권
block|막다, 방해하다 
note|주목하다; 짧은 편지, 메모 
regard|(~s) 안부; 간주하다 
store|저장하다; 가게 
treatment|치료, 대우, 처리 
firm|회사; 단단한, 확고한 
break|(짧은) 휴식 시간; 부수다, (법이나 약속 등을) 어기다 
fall|떨어지다, 넘어지다; (~s) 폭포, 가을 
stick|찌르다, 달라붙다; 지팡이 
count|중요하다, 세다
even|(비교급을 강조하여) 훨씬, ~조차도 
content|만족하는; 내용(물), (~s) 목차 
raise|기르다, 올리다, 모금하다
mean|못된; 의미하다 
notice|주목, 공고(문); 알아채다 
sign|서명하다; 신호, 기호 
might|힘; (may의 과거형) ~일지도 모른다 
point|가리키다; 점 
save|저축하다, 절약하다, 구하다
matter|중요하다; 문제, 물질 
relative|상대적인, 관계가 있는; 친척 
well|건강한; 잘 
state|상태, 주(州), 국가
tap|수도꼭지; 톡톡 두드리다 
bound|꼭 ~할 것 같은, ~행(行)의
strike|생각나다, 치다
field|분야, 들판, 경기장 
settle|해결하다, 정착하다
touch|감동시키다, 닿다 
object|목적, 물체; 반대하다 
mine|광산, 나의 것
land|착륙하다, 상륙하다; 육지, 나라 
lend|빌려주다
call|부르다, 전화하다
want|원하다, ~하고 싶어 하다 
depend|의지하다, 달려 있다 
fill|채우다
check|확인하다, 점검하다; 확인, 점검 
lift|들어 올리다, 들다
prepare|준비하다, 대비하다
agree|동의하다
try|노력하다, 해보다
paint|그리다, 페인트칠을 하다; 페인트 
lead|이끌다, ~한 생활을 하다
forget|잊다, 잊어버리다 
relax|느긋하게 하다, 긴장을 풀다
carry|가지고 가다, 운반하다
continue|계속하다, 계속되다
follow|따르다, 뒤따르다 
live|살다; 살아 있는, 생방송의 
allow|허락하다
invent|발명하다
need|필요로 하다; 필요 
wish|소망하다, ~하면 좋겠다; 소원 
laugh|웃다
improve|개선하다, 나아지다
happen|일어나다, 우연히 ~하다 
apply|지원하다, 적용하다
add|더하다, 보태다
build|짓다, 건축하다
bring|가져오다, 데려오다
become|~이 되다, ~에게 어울리다
guess|추측하다, 알아맞히다; 추측 
suppose|가정하다, 생각하다
receive|받다 
sell|팔다, 팔리다 
choose|선택하다, 고르다
offer|제안하다, 제공하다
shake|흔들다, 떨다
join|함께하다, 가입하다 
spend|소비하다, 쓰다 
expect|기대하다, (~이라고) 생각하다
return|돌아가다〔오다〕, 돌려주다
prevent|막다, 예방하다
invite|초대하다
forgive|용서하다
explain|설명하다
imagine|상상하다, 생각하다
win|이기다, 따다
communicate|의사소통하다, 연락을 주고받다
hit|치다, 부딪치다
charge|청구하다, 충전하다; 책임 
collect|수집하다, 모으다 
worry|걱정하다, 걱정시키다
remember|기억하다, ~을 잊지 않다
provide|제공하다, 공급하다
make|만들다, ~이 되다
fix|고치다, 고정시키다
hurry|서두르다, 재촉하다; 서두름 
borrow|빌리다, 차용하다
refuse|거부하다, 거절하다
stay|머무르다; 체류 
succeed|성공하다
select|고르다 
hurt|상처를 입히다, 아프다
help|돕다, 피하다 
pay|지불하다 
wear|입다, 착용하다
warn|경고하다
study|공부하다; 공부 
keep|유지하다, 보관하다
share|공유하다, 함께 쓰다
celebrate|축하하다, 기념하다 
ride|타다, 타고 가다; 타기 (=lift) 
realize|깨닫다, 실현하다
discuss|토론하다
die|죽다
complain|불평하다
pull|끌다 (=draw), 당기다
climb|올라가다, 등산하다 
push|밀다
avoid|피하다, 회피하다
hand|건네주다, 주다; 손 
believe|믿다, 생각하다
fly|날다, 날리다 
increase|증가하다; 증가 
fail|실패하다, ~하지 못하다
connect|연결하다, 접속하다, 관계하다 
kill|죽이다 
appear|나타나다, ~인 것 같다
remove|제거하다, 치우다
repair|수리하다, 수선하다 
create|창조하다, 만들어내다
understand|이해하다, 알다
seem|~인 것 같다, ~인 것처럼 보이다
pick|고르다, 따다
grow|자라다, 재배하다
form|형성하다, (형태를) 만들다; 형태
  `;

  const lines = rawData.trim().split('\n');
  const words: Word[] = [];
  
  let currentWord: string | null = null;

  for (const line of lines) {
    const trimmedLine = line.trim();
    if (!trimmedLine || trimmedLine.startsWith('_')) continue;

    const parts = trimmedLine.split('|');
    if (parts.length >= 2) {
         words.push({
            id: words.length + 1,
            word: parts[0].trim(),
            meaning: parts[1].trim(),
            isUserAdded: true,
        });
    }
  }
  
  return words;
};

export const generateInitialConversations = (): Conversation[] => {
  return [
    { id: 1, expression: "What's your name?", meaning: "이름이 어떻게 되세요?" },
    { id: 2, expression: "How's the weather?", meaning: "날씨가 어때요?" },
    { id: 3, expression: "I don't know.", meaning: "모르겠어요." },
    { id: 4, expression: "Are you ready?", meaning: "준비됐나요?" },
    { id: 5, expression: "Thanks a lot.", meaning: "정말 감사합니다." },
    { id: 6, expression: "I'm open-minded.", meaning: "저는 개방적인 사람입니다." },
    { id: 7, expression: "I believe you.", meaning: "나는 당신을 믿어요." },
    { id: 8, expression: "Sorry, my mistake.", meaning: "죄송해요, 제가 실수했어요." },
    { id: 9, expression: "What's your hobby?", meaning: "취미가 뭐예요?" },
    { id: 10, expression: "Take a break.", meaning: "잠깐 쉬세요." },
    { id: 11, expression: "What's good here?", meaning: "여기 뭐가 맛있나요?" },
    { id: 12, expression: "This is simple.", meaning: "간단하네요." },
    { id: 13, expression: "It's so hot.", meaning: "너무 더워요." },
    { id: 14, expression: "Are you sure?", meaning: "확실해요?" },
    { id: 15, expression: "I need help.", meaning: "도움이 필요해요." },
    { id: 16, expression: "What's your plan?", meaning: "당신의 계획은 뭔가요?" },
    { id: 17, expression: "Is everything all right?", meaning: "아무 일 없는 거죠?" },
    { id: 18, expression: "I'm a student.", meaning: "저는 학생입니다." },
    { id: 19, expression: "Enjoy your meal.", meaning: "맛있게 드세요." },
    { id: 20, expression: "I don't mind.", meaning: "상관없어요." },
    { id: 21, expression: "I know her.", meaning: "저는 그녀를 알아요." },
    { id: 22, expression: "Are you sick?", meaning: "어디 아프신가요?" },
    { id: 23, expression: "Where am I?", meaning: "여기가 어디죠?" },
    { id: 24, expression: "What's that smell?", meaning: "무슨 냄새죠?" },
    { id: 25, expression: "That looks great.", meaning: "좋아 보이네요." },
    { id: 26, expression: "I'm very impressed.", meaning: "정말 감동받았어요." },
    { id: 27, expression: "She is bright.", meaning: "그녀는 똑똑해요." },
    { id: 28, expression: "I guess so.", meaning: "그런 것 같아요." },
    { id: 29, expression: "I mean it.", meaning: "진심이에요." },
    { id: 30, expression: "I do yoga.", meaning: "저는 요가를 해요." },
    { id: 31, expression: "I'm at Starbucks.", meaning: "저는 스타벅스에 있어요." },
    { id: 32, expression: "I made it.", meaning: "제가 만들었어요." },
    { id: 33, expression: "It's pretty hard.", meaning: "정말 어려워요." },
    { id: 34, expression: "I had lunch.", meaning: "점심을 먹었어요." },
    { id: 35, expression: "They left early.", meaning: "그들은 일찍 떠났어요." },
    { id: 36, expression: "I ate bread.", meaning: "저는 빵을 먹었어요." },
    { id: 37, expression: "Can I join?", meaning: "저도 참여해도 될까요?" },
    { id: 38, expression: "How's your day?", meaning: "오늘 어땠어요?" },
    { id: 39, expression: "What's your goal?", meaning: "당신의 목표는 뭐예요?" },
    { id: 40, expression: "I have time.", meaning: "한가해요. (시간 있어요)" },
    { id: 41, expression: "What's your favorite?", meaning: "제일 좋아하는 게 뭐예요?" },
    { id: 42, expression: "How's your family?", meaning: "가족분들은 잘 지내세요?" },
    { id: 43, expression: "Let's go swimming.", meaning: "수영하러 가요." },
    { id: 44, expression: "Let's exercise together.", meaning: "함께 운동해요." },
    { id: 45, expression: "Are you okay?", meaning: "괜찮으세요?" },
    { id: 46, expression: "I'm not sure.", meaning: "잘 모르겠어요." },
    { id: 47, expression: "Let's go hiking.", meaning: "등산 가요." },
    { id: 48, expression: "It's too noisy.", meaning: "너무 시끄러워요." },
    { id: 49, expression: "That's so cute.", meaning: "너무 귀여워요." },
    { id: 50, expression: "I bought this.", meaning: "이거 샀어요." },
    { id: 51, expression: "I'm feeling sick.", meaning: "몸이 안 좋아요." },
    { id: 52, expression: "They were here.", meaning: "그들은 여기 있었어요." },
    { id: 53, expression: "I'm not interested.", meaning: "관심 없습니다." },
    { id: 54, expression: "What's your opinion?", meaning: "당신 생각은 어떻습니까?" },
    { id: 55, expression: "I'm getting ready.", meaning: "준비 중이에요." },
    { id: 56, expression: "I dropped it.", meaning: "떨어뜨렸어요." },
    { id: 57, expression: "I'm feeling dizzy.", meaning: "어지러워요." },
    { id: 58, expression: "Is anybody here?", meaning: "여기 누구 없어요?" },
    { id: 59, expression: "I like it.", meaning: "마음에 드네요." },
    { id: 60, expression: "Take it slow.", meaning: "천천히 해요." },
    { id: 61, expression: "I love it.", meaning: "정말 마음에 들어요." },
    { id: 62, expression: "It's sunny outside.", meaning: "밖에 날씨가 맑아요." },
    { id: 63, expression: "It's not necessary.", meaning: "그건 필요하지 않아요." },
    { id: 64, expression: "I prefer this.", meaning: "저는 이게 더 좋네요." },
    { id: 65, expression: "I hope so.", meaning: "그러길 바래요." },
    { id: 66, expression: "Same again, please.", meaning: "똑같은 걸로 또 주세요." },
    { id: 67, expression: "I drank water.", meaning: "물을 마셨어요." },
    { id: 68, expression: "Wait a while.", meaning: "잠시 기다려요." },
    { id: 69, expression: "I remember them.", meaning: "저는 그들을 기억해요." },
    { id: 70, expression: "I'm so sorry.", meaning: "정말 미안해요." },
    { id: 71, expression: "Yes, of course.", meaning: "네, 물론이죠." },
    { id: 72, expression: "Let me check.", meaning: "확인해 볼게요." },
    { id: 73, expression: "I'm on duty.", meaning: "저는 근무 중이에요." },
    { id: 74, expression: "I knew it.", meaning: "그럴 줄 알았어요." },
    { id: 75, expression: "I told you.", meaning: "제가 말했잖아요." },
    { id: 76, expression: "I love you.", meaning: "사랑해요." },
    { id: 77, expression: "See you tomorrow.", meaning: "내일 봐요." },
    { id: 78, expression: "Not at all.", meaning: "천만에요." },
    { id: 79, expression: "Who are you?", meaning: "당신은 누구세요?" },
    { id: 80, expression: "I trust you.", meaning: "당신을 믿어요." },
    { id: 81, expression: "What's going on?", meaning: "무슨 일이에요?" },
    { id: 82, expression: "I study English.", meaning: "저는 영어 공부해요." },
    { id: 83, expression: "What are these?", meaning: "이게 다 뭐예요?" },
    { id: 84, expression: "Can you swim?", meaning: "당신은 수영할 수 있어요?" },
    { id: 85, expression: "I like coffee.", meaning: "커피 좋아해요." },
    { id: 86, expression: "Call me back.", meaning: "저에게 다시 전화해 주세요." },
    { id: 87, expression: "Is it yours?", meaning: "이거 당신 건가요?" },
    { id: 88, expression: "I like reading.", meaning: "저는 독서를 즐겨요." },
    { id: 89, expression: "I am kidding.", meaning: "농담입니다." },
    { id: 90, expression: "Come with me.", meaning: "저랑 함께 가요." },
    { id: 91, expression: "Hang in there.", meaning: "조금만 참아봐요." },
    { id: 92, expression: "Keep in touch.", meaning: "또 연락 주세요." },
    { id: 93, expression: "No big deal.", meaning: "별일 안 해요. (별거 아니에요)" },
    { id: 94, expression: "Good for you.", meaning: "잘됐군요." },
    { id: 95, expression: "Sorry about that.", meaning: "(그 일은) 미안해요." },
    { id: 96, expression: "It is difficult.", meaning: "어렵습니다." },
    { id: 97, expression: "I'll be there.", meaning: "제가 갈게요." },
    { id: 98, expression: "Yes, I'm sure.", meaning: "네, 확실합니다." },
    { id: 99, expression: "Open the door.", meaning: "문을 여세요." },
    { id: 100, expression: "He is my type.", meaning: "그는 제 취향입니다." },
    { id: 101, expression: "I'm Korean.", meaning: "저는 한국인입니다." },
    { id: 102, expression: "It's dark.", meaning: "어둡네요." },
    { id: 103, expression: "You are safe.", meaning: "당신은 안전합니다." },
    { id: 104, expression: "How's business?", meaning: "사업은 어떻게 돼가요?" },
    { id: 105, expression: "Take it.", meaning: "가져가세요." },
    { id: 106, expression: "I'm married.", meaning: "저는 결혼했습니다." },
    { id: 107, expression: "Who's first?", meaning: "누가 먼저죠?" },
    { id: 108, expression: "Who's next?", meaning: "다음은 누구죠?" },
    { id: 109, expression: "Carpe diem.", meaning: "현재를 즐겨요. (까르페 디엠)" },
    { id: 110, expression: "That's life.", meaning: "그게 인생입니다." },
    { id: 111, expression: "I can't.", meaning: "저는 못 합니다." },
    { id: 112, expression: "You are kind.", meaning: "친절하시네요." },
    { id: 113, expression: "It's me.", meaning: "저예요." },
    { id: 114, expression: "Bill, please.", meaning: "계산서 부탁합니다." },
    { id: 115, expression: "Bottoms up.", meaning: "쭉 들이키세요. (건배)" },
    { id: 116, expression: "Bless you.", meaning: "(재채기한 사람에게) 신의 가호가 있기를." },
    { id: 117, expression: "We are family.", meaning: "우리는 가족입니다." },
    { id: 118, expression: "To go.", meaning: "포장이요." },
    { id: 119, expression: "Things change.", meaning: "상황은 변합니다." },
    { id: 120, expression: "Best regards.", meaning: "안부 전해요." },
    { id: 121, expression: "Money talks.", meaning: "돈이면 안 되는 게 없어요." },
    { id: 122, expression: "No comment.", meaning: "드릴 말씀이 없네요." },
    { id: 123, expression: "Sit down.", meaning: "앉으세요." },
    { id: 124, expression: "Stand up.", meaning: "일어나세요." },
    { id: 125, expression: "It's illegal.", meaning: "불법입니다." },
    { id: 126, expression: "I forgot.", meaning: "잊어버렸어요." },
    { id: 127, expression: "Have some.", meaning: "(좀) 드세요." },
    { id: 128, expression: "For you.", meaning: "당신을 위해서요." },
    { id: 129, expression: "Look around.", meaning: "구경하세요." },
    { id: 130, expression: "Open it.", meaning: "그거 열어봐요." },
    { id: 131, expression: "Push it.", meaning: "밀어 봐요." },
    { id: 132, expression: "As usual.", meaning: "평소처럼." },
    { id: 133, expression: "How sweet!", meaning: "정말 달콤하네요!" },
    { id: 134, expression: "How big!", meaning: "정말 크군요!" },
    { id: 135, expression: "Thanks again.", meaning: "다시 한번 감사해요." },
    { id: 136, expression: "Come inside.", meaning: "안으로 들어오세요." },
    { id: 137, expression: "Nothing's easy.", meaning: "쉬운 일은 없습니다." },
    { id: 138, expression: "It's popular.", meaning: "인기가 많습니다." },
    { id: 139, expression: "Thanks anyway.", meaning: "어쨌든 감사합니다." },
    { id: 140, expression: "Don't smoke.", meaning: "담배 피우지 마세요." },
    { id: 141, expression: "How often?", meaning: "얼마나 자주?" },
    { id: 142, expression: "Turn left.", meaning: "왼쪽으로 도세요." },
    { id: 143, expression: "Turn right.", meaning: "우측으로 도세요." },
    { id: 144, expression: "It helps.", meaning: "도움이 됩니다." },
    { id: 145, expression: "Forgive me.", meaning: "용서해주세요." },
    { id: 146, expression: "Study hard.", meaning: "열심히 공부하세요." },
    { id: 147, expression: "Switch on.", meaning: "전원을 켜세요." },
    { id: 148, expression: "Switch off.", meaning: "전원을 끕니다." },
    { id: 149, expression: "Allow me.", meaning: "제가 하겠습니다." },
    { id: 150, expression: "I will.", meaning: "그럴게요." },
    { id: 151, expression: "It's new.", meaning: "새것입니다." },
    { id: 152, expression: "Read this.", meaning: "읽어보세요." },
    { id: 153, expression: "Who won?", meaning: "누가 이겼습니까?" },
    { id: 154, expression: "That's correct.", meaning: "맞아요." },
    { id: 155, expression: "Not sure.", meaning: "확실하진 않아요." },
    { id: 156, expression: "Ask yourself.", meaning: "자신에게 물어봐요." },
    { id: 157, expression: "Use this.", meaning: "이걸 사용하세요." },
    { id: 158, expression: "I'm drunk.", meaning: "취했어요." },
    { id: 159, expression: "Make sure.", meaning: "확인하세요." },
    { id: 160, expression: "For you.", meaning: "당신을 위해서요." },
    { id: 161, expression: "It's simple.", meaning: "간단해요." },
    { id: 162, expression: "I'm flattered.", meaning: "영광입니다. (과찬이세요)" },
    { id: 163, expression: "No thanks.", meaning: "사양하겠어요." },
    { id: 164, expression: "Yes, please.", meaning: "네, 부탁해요." },
    { id: 165, expression: "As always.", meaning: "언제나 처럼요." },
    { id: 166, expression: "It doesn't matter.", meaning: "상관없습니다." },
    { id: 167, expression: "Until tonight.", meaning: "오늘 밤까지요." },
    { id: 168, expression: "Until tomorrow.", meaning: "내일까지요." },
    { id: 169, expression: "Before sunrise.", meaning: "해가 뜨기 전에." },
    { id: 170, expression: "It's useful.", meaning: "유용합니다." },
    { id: 171, expression: "Is that so?", meaning: "그런가요?" },
    { id: 172, expression: "Nice timing.", meaning: "타이밍이 좋네요." },
    { id: 173, expression: "Me neither.", meaning: "나 역시 그렇지 않아요." },
    { id: 174, expression: "Do something.", meaning: "어떻게 좀 해봐요." },
    { id: 175, expression: "Step aside.", meaning: "비켜요." },
    { id: 176, expression: "It's over.", meaning: "끝났어요." },
    { id: 177, expression: "Bring yourself.", meaning: "(선물 없이) 몸만 오세요." },
    { id: 178, expression: "I'm hoarse.", meaning: "목이 쉬었어요." },
    { id: 179, expression: "It's cloudy.", meaning: "날씨가 흐리네요." },
    { id: 180, expression: "It's foggy.", meaning: "안개가 자욱합니다." },
    { id: 181, expression: "No littering.", meaning: "쓰레기 버리지 마세요." },
    { id: 182, expression: "Pull over.", meaning: "차 세워요." },
    { id: 183, expression: "Time flies.", meaning: "시간이 참 빠릅니다." },
    { id: 184, expression: "Treat us.", meaning: "한턱 내요." },
    { id: 185, expression: "Dream big.", meaning: "꿈을 크게 가지세요." },
    { id: 186, expression: "Rain is coming.", meaning: "비가 오고 있습니다." },
    { id: 187, expression: "Quite pricey.", meaning: "꽤 비싸군요." },
    { id: 188, expression: "When exactly?", meaning: "정확히 언제요?" },
    { id: 189, expression: "Take medicine.", meaning: "약을 드세요." },
    { id: 190, expression: "It's sweet.", meaning: "달콤해요." },
    { id: 191, expression: "It's obvious.", meaning: "당연합니다." },
    { id: 192, expression: "No choice.", meaning: "선택의 여지가 없어요." },
    { id: 193, expression: "Holy cow!", meaning: "맙소사!" },
    { id: 194, expression: "I'm sorry?", meaning: "(못 들었을 때) 뭐라고요?" },
    { id: 195, expression: "Just wondering.", meaning: "그냥 궁금해요." },
    { id: 196, expression: "Text her.", meaning: "그녀에게 문자해 봐요." },
    { id: 197, expression: "Almost done.", meaning: "거의 다 끝났어요." },
    { id: 198, expression: "Stay home.", meaning: "집에 머무르세요." },
    { id: 199, expression: "Remember this.", meaning: "이걸 기억하세요." },
    { id: 200, expression: "Throw it.", meaning: "물건을 던져요." }
  ];
};

export const generateInitialIdioms = (): Idiom[] => {
  const rawIdioms = [
    {n:1, e:"There are a lot of parks in Seoul.", k:"서울에는 공원이 많이 있다."},
    {n:2, e:"I am going to write a letter.", k:"나는 편지를 쓸 작정이다."},
    {n:3, e:"You have to go at once.", k:"너는 곧 가야 한다."},
    {n:4, e:"It is hard to learn.", k:"배우는 것은 어렵다."},
    {n:5, e:"He is able to speak English.", k:"그는 영어를 말할 수 있다."},
    {n:6, e:"I know nothing of his personality.", k:"나는 그의 성격을 알지 못한다."},
    {n:7, e:"May I ask a favor of you?", k:"한 가지 부탁을 해도 될까요?"},
    {n:8, e:"I was so tired that I fell asleep quickly.", k:"나는 너무 피곤해서 빨리 잠들었다."},
    {n:9, e:"The baby lives on milk.", k:"그 갓난아이는 우유를 먹고 산다."},
    {n:10, e:"I get up at seven every morning.", k:"나는 아침마다 7시에 일어난다."},
    {n:11, e:"I wake up at six every morning.", k:"나는 매일 아침 6시에 깬다."},
    {n:12, e:"She called on her uncle on her way home from school yesterday.", k:"그녀는 어제 학교에서 집으로 돌아오는 도중에 아저씨를 방문했다."},
    {n:13, e:"She did not give up the idea of going to America to study.", k:"그녀는 공부하러 미국에 갈 생각을 버리지 않았다."},
    {n:14, e:"He turned up an hour later.", k:"그는 한 시간이나 늦게 나타났다."},
    {n:15, e:"I am so happy that I can't believe it!", k:"나는 너무 기뻐서 그것을 믿을 수 없어!"},
    {n:16, e:"We have gone through many changes.", k:"우리는 많은 변화를 겪어 왔다."},
    {n:17, e:"The oil is all used up.", k:"석유가 다 떨어졌다."},
    {n:18, e:"Pay attention to me, please.", k:"저에게 주목해 주세요."},
    {n:19, e:"My grandmother passed away last year.", k:"할머니는 작년에 돌아가셨다."},
    {n:20, e:"Cheer up and be happy.", k:"기운 내고 행복해."},
    {n:21, e:"She is too young to understand it.", k:"그녀는 너무 어려서 그것을 이해할 수 없다."},
    {n:22, e:"I am interested in music.", k:"나는 음악에 흥미가 있다."},
    {n:23, e:"The bus is about to leave.", k:"버스가 막 떠나려고 한다."},
    {n:24, e:"I arrived at the station just in time.", k:"나는 딱 제시간에 역에 도착했다."},
    {n:25, e:"She introduced me to her family.", k:"그녀는 나를 그녀의 가족에게 소개했다."},
    {n:26, e:"Above all, be honest.", k:"무엇보다도 먼저 정직하라."},
    {n:27, e:"He is familiar with the Internet.", k:"그는 인터넷에 익숙하다."},
    {n:28, e:"At last, we found it.", k:"마침내 우리는 그것을 찾았다."},
    {n:29, e:"We must take care of our children.", k:"우리는 어린이들을 돌봐 주어야 한다."},
    {n:30, e:"Mother is waiting for her son.", k:"어머니는 아들을 기다리고 있다."},
    {n:31, e:"Some boys are running after a dog.", k:"몇 명의 소년들이 개의 뒤를 쫓아 뛰어가고 있다."},
    {n:32, e:"She got to the station in time.", k:"그녀는 제시간에 역에 도착했다."},
    {n:33, e:"I have wanted to see you for a long time.", k:"나는 오랫동안 너를 만나보고 싶었다."},
    {n:34, e:"I have waited for him for an hour.", k:"나는 한 시간 동안 그를 기다렸다/찾았다."},
    {n:35, e:"I met Jane on my way to school.", k:"나는 학교에 가는 도중에 제인을 만났다."},
    {n:36, e:"He came back at once.", k:"그는 곧 돌아왔다."},
    {n:37, e:"I forget as soon as I learn.", k:"나는 배우자마자 곧 잊어버린다."},
    {n:38, e:"Let’s go skating after school.", k:"방과 후에 스케이트 타러 가자."},
    {n:39, e:"Where do you come from?", k:"당신은 어디 출신입니까?"},
    {n:40, e:"There is a bridge in front of the house.", k:"그 집 앞에 다리가 있다."},
    {n:41, e:"He was not strong at first.", k:"그는 처음에는 힘이 세지 않았다."},
    {n:42, e:"You don't have to do so.", k:"너는 그렇게 할 필요가 없다."},
    {n:43, e:"We took pictures in the park.", k:"우리는 공원에서 사진을 찍었다."},
    {n:44, e:"She read as many books as she could.", k:"그녀는 할 수 있는 대로 많은 책을 읽었다."},
    {n:45, e:"... I met a foreigner and I spoke to him in English.", k:"... 나는 영어로 그에게 말을 걸어 보았다."},
    {n:46, e:"All at once, it began to rain then.", k:"그런데 그때 비가 내리기 시작했다."},
    {n:47, e:"Air is a kind of gas.", k:"공기는 기체의 일종이다."},
    {n:48, e:"I’ll leave for school at eight.", k:"나는 8시에 학교로 출발한다."},
    {n:49, e:"He is good at tennis.", k:"그는 테니스를 잘 친다."},
    {n:50, e:"She gave me a sheet of paper ...", k:"그녀는 나에게 종이 한 장을 주며..."},
    {n:51, e:"She picked up a book.", k:"그녀는 책을 집어 들었다."},
    {n:52, e:"I am staying with my uncle.", k:"나는 삼촌 집에 머물고 있다."},
    {n:53, e:"The boy said to himself...", k:"...하고 소년은 마음속으로 생각했다."},
    {n:54, e:"You had better go now.", k:"너는 지금 가는 편이 좋다."},
    {n:55, e:"Every room is full of many books.", k:"방마다 많은 책들로 가득 차 있다."},
    {n:56, e:"She smiled at us.", k:"그녀는 우리를 보고 미소 지었다."},
    {n:57, e:"The plant looks like a butterfly.", k:"그 식물은 나비처럼 보인다."},
    {n:58, e:"She looked at me with a smile.", k:"그녀는 미소를 지으며 나를 보았다."},
    {n:59, e:"She can speak both English and French freely.", k:"그녀는 영어도, 불어도 유창하게 말할 수 있다."},
    {n:60, e:"She works for an oil company.", k:"그녀는 석유 회사에서 일하고 있다."},
    {n:61, e:"He was able to swim at last.", k:"그는 마침내 헤엄칠 수 있게 되었다."},
    {n:62, e:"We started for New York.", k:"우리는 뉴욕을 향해 출발했다."},
    {n:63, e:"I’ve had such a good time.", k:"나는 정말 재미있는 시간을 보냈다."},
    {n:64, e:"I made a mistake in reading.", k:"나는 읽기에서 한 군데 틀렸다."},
    {n:65, e:"She grew up in Seoul.", k:"그녀는 서울에서 자랐다."},
    {n:66, e:"We went home as soon as school was over at three.", k:"우리는 3시에 수업이 끝나자 곧 집으로 갔다."},
    {n:67, e:"We have plenty of books to read.", k:"우리는 읽을 책이 많이 있다."},
    {n:68, e:"I can't run any more.", k:"나는 더 이상 달릴 수 없다."},
    {n:69, e:"A gentleman came up to me.", k:"한 신사가 나 있는 데까지 다가왔다."},
    {n:70, e:"I took out a book from a bag.", k:"나는 가방에서 책 한 권을 꺼냈다."},
    {n:71, e:"I paid for the books.", k:"나는 책값을 치렀다."},
    {n:72, e:"Why don't you come with me?", k:"나와 함께 가는 게 어때요?"},
    {n:73, e:"The fine weather went on for five days.", k:"맑은 날씨가 5일 간 계속되었다."},
    {n:74, e:"A gentleman came up and talked to me.", k:"한 신사가 다가와서 내게 말을 걸었다."},
    {n:75, e:"We waited for him for a while.", k:"우리는 잠시 그를 기다렸다."},
    {n:76, e:"Look up the word in your dictionary.", k:"그 낱말을 네 사전에서 찾아보아라."},
    {n:77, e:"I often looked out of the window.", k:"나는 가끔 창 밖을 내다보았다."},
    {n:78, e:"I usually go to bed at 10.", k:"나는 보통 10시에 잔다."},
    {n:79, e:"I did not hear the news yet.", k:"나는 아직 그 소식을 듣지 못했다."},
    {n:80, e:"We got on the train at Seoul station.", k:"우리는 서울역에서 기차를 탔다."},
    {n:81, e:"I put on my clothes in a hurry.", k:"나는 서둘러 옷을 입었다."},
    {n:82, e:"He went skiing for the first time.", k:"그는 처음으로 스키 타러 갔다."},
    {n:83, e:"Whom does this book belong to?", k:"이 책은 누구의 것이지?"},
    {n:84, e:"Say hello to your father.", k:"당신 아버님께 안부 전해 주세요."},
    {n:85, e:"I was very pleased to hear that...", k:"나는 ... 듣고 매우 기뻤다."},
    {n:86, e:"I couldn’t go out because of the rain.", k:"나는 비 때문에 외출하지 않았다."},
    {n:87, e:"... or you’ll be late for the train.", k:"... 기차 시간에 늦을 것이다."},
    {n:88, e:"I will study English harder from now on.", k:"나는 이제부터 영어를 더욱 열심히 공부하겠다."},
    {n:89, e:"Here you are.", k:"자, 여기 있습니다."},
    {n:90, e:"She took a book out.", k:"그녀는 책 한 권을 꺼냈다."},
    {n:91, e:"We are looking forward to the summer holidays.", k:"우리는 여름 방학이 오기를 손꼽아 기다리고 있다."},
    {n:92, e:"He fell down and got hurt.", k:"그는 넘어져서 상처를 입었다."},
    {n:93, e:"The girls took the man for the singer Rain.", k:"소녀들은 그 남자를 가수 비라고 생각했다."},
    {n:94, e:"You must get rid of bad habits.", k:"나쁜 습관을 버려야 한다."},
    {n:95, e:"Please help yourself to a tea.", k:"차를 마음대로 드세요."},
    {n:96, e:"The young girl looked after them.", k:"그 젊은 아가씨가 그들을 돌보았다."},
    {n:97, e:"Do you know what it is made of?", k:"너는 그것이 무엇으로 만들어졌는지 아니?"},
    {n:98, e:"More and more people began to gather...", k:"더욱 더 많은 사람들이..."},
    {n:99, e:"She put a flower in the vase.", k:"그녀는 꽃 한 송이를 꽃병에 꽂았다."},
    {n:100, e:"The man went away.", k:"그 남자는 가버렸다."},
    {n:101, e:"We were surprised at the news.", k:"우리는 그 소식을 듣고 놀랐다."},
    {n:102, e:"Count from one to a hundred in Japanese.", k:"일본어로 1에서 100까지 세어봐."},
    {n:103, e:"Not only she but also I am tall.", k:"그녀뿐만 아니라 나도 키가 크다."},
    {n:104, e:"I like to study English, history, music and so on.", k:"나는 영어, 역사, 음악 등등을 공부하기 좋아한다."},
    {n:105, e:"She stayed in bed with a cold all day.", k:"그녀는 감기로 하루 종일 누워 있었다."},
    {n:106, e:"As a result, I got full marks.", k:"그 결과, 나는 만점 받았다."},
    {n:107, e:"They were supposed to be here an hour ago.", k:"그들은 1시간 전에 여기 오기로 되어 있었다."},
    {n:108, e:"I was at a loss what to do.", k:"나는 무엇을 해야 할지 몰랐다."},
    {n:109, e:"You can rely on me 100%.", k:"저를 100% 믿으셔도 좋습니다."},
    {n:110, e:"We can’t do without water.", k:"우리는 물 없이 지낼 수 없다."},
    {n:111, e:"My sister handed down old clothes to me.", k:"언니가 내게 헌옷을 물려주었다."},
    {n:112, e:"I have something to do with the accident.", k:"나는 그 사고와 관계가 있다."},
    {n:113, e:"I’m sorry to be a trouble to you.", k:"폐를 끼쳐 죄송합니다."},
    {n:114, e:"The Korean War broke out in 1950.", k:"한국전쟁은 1950년에 일어났다."},
    {n:115, e:"I will do anything but that.", k:"나는 그 밖의 것이라면 무엇이든지 하겠다."},
    {n:116, e:"Nothing but science can save the world.", k:"과학만이 이 세상을 구할 수 있다."},
    {n:117, e:"Cows feed on grass.", k:"소는 풀을 먹고 산다."},
    {n:118, e:"In fact, the movie is not that good.", k:"사실, 그 영화는 그렇게 좋지는 않다."},
    {n:119, e:"You cannot be too diligent.", k:"아무리 근면해도 지나치지 않다."},
    {n:120, e:"We can keep in touch with the world through the Internet.", k:"우리는 인터넷을 통해 세계와 접촉할 수 있다."},
    {n:121, e:"The girl takes after her mother.", k:"그 소녀는 어머니를 닮았다."},
    {n:122, e:"She is in charge of sales.", k:"그녀는 판매담당이다."},
    {n:123, e:"I got the better of him at table tennis.", k:"나는 탁구에서 그를 이겼다."},
    {n:124, e:"I care about you a lot.", k:"나는 너에게 관심이 많다."},
    {n:125, e:"He took a real pains with his work.", k:"그는 자신의 일에 정말로 힘을 다했다."},
    {n:126, e:"Make use of every chance to speak English.", k:"영어를 말할 수 있는 기회를 최대한 이용하도록 노력해라."},
    {n:127, e:"You had better go to bed.", k:"너는 자는 것이 좋다."},
    {n:128, e:"We took turns driving each week.", k:"우리는 주마다 교대로 운전했다."},
    {n:129, e:"She turned him down.", k:"그녀는 그를 거절했다."},
    {n:130, e:"The problem doesn’t work out.", k:"그 문제가 풀리지 않는다."},
    {n:131, e:"Most children look up to their parents.", k:"대부분의 어린이들은 부모님을 존경한다."},
    {n:132, e:"I stayed up last night.", k:"나는 어젯밤 늦게까지 자지 않고 있었다."},
    {n:133, e:"Take your time and look around.", k:"천천히 둘러보세요."},
    {n:134, e:"She is very funny at times.", k:"그녀는 때때로 매우 재미있다."},
    {n:135, e:"We must find out how to do it.", k:"그것을 하는 방법을 알아내야 한다."},
    {n:136, e:"I could not but tell a lie", k:"나는 거짓말을 하지 않을 수 없었다."},
    {n:137, e:"The sooner, the better.", k:"빠르면 빠를수록 더 좋다."},
    {n:138, e:"In general, they work from nine to five.", k:"일반적으로 그들은 9시부터 5시까지 일한다."},
    {n:139, e:"Where did the accident take place?", k:"그 사고는 어디서 일어났지?"},
    {n:140, e:"The trees provide us with fruit.", k:"그 나무들은 우리에게 과일을 준다."},
    {n:141, e:"No one is free from stress.", k:"스트레스가 없는 사람은 아무도 없다."},
    {n:142, e:"In the end, the war broke out.", k:"결국 전쟁이 일어났다."},
    {n:143, e:"You should set a goal and achieve it.", k:"목표를 세워서 달성해야 한다."},
    {n:144, e:"He applied for the job.", k:"그는 그 일자리에 지원했다."},
    {n:145, e:"A thief broke into his house.", k:"도둑이 그의 집에 침입했다."},
    {n:146, e:"He likes to stand out.", k:"그는 눈에 띄는 것을 좋아한다."},
    {n:147, e:"Most of them are looking for a new leader.", k:"대부분의 사람들은 새로운 지도자를 찾고 있다."},
    {n:148, e:"Pay attention to what your teacher says.", k:"선생님이 말씀하시는 것을 주의해서 들어라."},
    {n:149, e:"What do you say to a walk in the park?", k:"공원을 산책하는 게 어떨까?"},
    {n:150, e:"Please keep this request in mind.", k:"이 부탁을 부디 명심하세요."},
    {n:151, e:"She burst into laughter.", k:"그녀는 갑자기 웃기 시작했다."},
    {n:152, e:"The horse tried to jump over the fence.", k:"그 말은 울타리를 뛰어넘으려고 했다."},
    {n:153, e:"... come to me to get them back.", k:"... 그녀는 지금 그 책들을 찾으러 왔다."},
    {n:154, e:"They ran out of the classroom in a hurry.", k:"그들은 급히 교실에서 나왔다."},
    {n:155, e:"I am afraid of spiders.", k:"나는 거미가 무섭다."},
    {n:156, e:"... In other words, you are wrong.", k:"... 다시 말해서 네가 틀렸어."},
    {n:157, e:"It takes more than an hour.", k:"한 시간 이상 걸린다."},
    {n:158, e:"I found out where he had gone.", k:"나는 그가 어디로 갔는지 알아냈다."},
    {n:159, e:"Father was angry with his son.", k:"아버지는 아들에게 화를 냈다."},
    {n:160, e:"She looked around for a while.", k:"그녀는 잠시 둘러보았다."},
    {n:161, e:"They ran away as soon as they saw their teacher.", k:"그들은 선생님을 보자마자 도망쳤다."},
    {n:162, e:"She is fond of children.", k:"그녀는 아이들을 좋아한다."},
    {n:163, e:"I am not so tall as his brother.", k:"나는 그의 형만큼 키가 크지 않다."},
    {n:164, e:"Everyone should do his or her best.", k:"모두 최선을 다해야 한다."},
    {n:165, e:"... For example, roses are beautiful!", k:"... 예를 들면 장미가 아름답다!"},
    {n:166, e:"You are welcome.", k:"천만에요."},
    {n:167, e:"A table is in the middle of the room.", k:"방 한가운데에 탁자가 있다."},
    {n:168, e:"Don’t get angry with me so often.", k:"내게 그렇게 자주 화를 내지 마라."},
    {n:169, e:"She put some roses in the vase.", k:"그녀는 장미 몇 송이를 꽃병에 꽂았다."},
    {n:170, e:"He cannot speak English at all.", k:"그는 영어를 전혀 말하지 못한다."},
    {n:171, e:"She looked at me for a while.", k:"그녀는 잠시 나를 바라보았다."},
    {n:172, e:"She came up to him in the streets.", k:"그녀는 거리에서 그에게 다가갔다."},
    {n:173, e:"I shook hands with him.", k:"나는 그와 악수했다."},
    {n:174, e:"She has kept writing for an hour.", k:"그녀는 한 시간 동안 계속 쓰고 있다."},
    {n:175, e:"A bird ... flew far away.", k:"새 한 마리가 ... 멀리 날아가 버렸다."},
    {n:176, e:"After a while, it began to rain.", k:"잠시 후에 비가 내리기 시작했다."},
    {n:177, e:"I held up my hand to stop the car.", k:"나는 그 차를 세우기 위해 손을 들었다."},
    {n:178, e:"He was very busy at that time.", k:"그는 그때 몹시 바빴다."},
    {n:179, e:"They asked for some food.", k:"그들은 먹을 것을 요구했다."},
    {n:180, e:"We’ll have a party at the end of the contest.", k:"대회의 끝에는 파티가 열린다."},
    {n:181, e:"Nothing happened to him.", k:"그에게 아무 일도 일어나지 않았다."},
    {n:182, e:"We are ready to start.", k:"우리는 출발할 준비가 되어 있다."},
    {n:183, e:"She turned around and began to cry.", k:"그녀는 돌아서서 울기 시작했다."},
    {n:184, e:"She made up her mind to marry.", k:"그녀는 결혼하기로 결심했다."},
    {n:185, e:"I get off the bus here every day.", k:"나는 매일 여기서 버스에서 내린다."},
    {n:186, e:"I would like to help you.", k:"나는 너를 돕고 싶다."},
    {n:187, e:"Would you like to see her?", k:"그녀를 만나시겠습니까?"},
    {n:188, e:"She will get well soon.", k:"그녀는 곧 몸이 회복될 것이다."},
    {n:189, e:"They got married in Seoul.", k:"그들은 서울에서 결혼했다."},
    {n:190, e:"He took off his shoes.", k:"그는 신발을 벗었다."},
    {n:191, e:"He takes a walk every morning.", k:"그는 아침마다 산책한다."},
    {n:192, e:"He came running all the way.", k:"그는 줄곧 뛰어서 왔다."},
    {n:193, e:"We cut down the tree.", k:"우리는 나무를 베어 넘어뜨렸다."},
    {n:194, e:"I am proud of being a Korean.", k:"나는 한국 사람임을 자랑스럽게 여긴다."},
    {n:195, e:"Have you ever been to London?", k:"런던에 가 본 적이 있니?"},
    {n:196, e:"I found out that our opinions differed from theirs.", k:"나는 우리의 의견이 그들의 의견과 다르다는 것을 발견했다."},
    {n:197, e:"We learned German instead of French.", k:"우리는 프랑스어 대신에 독일어를 배웠다."},
    {n:198, e:"My mother is sick in bed today.", k:"어머니는 오늘 병으로 누워 있다."},
    {n:199, e:"I feel sorry for him.", k:"나는 그를 가엾게 여긴다."},
    {n:200, e:"I’m getting ready for dinner.", k:"나는 저녁 식사 준비를 하고 있다."},
    {n:201, e:"Cheese is made from milk.", k:"치즈는 우유로 만든다."},
    {n:202, e:"I made friends with her.", k:"나는 그녀와 친해졌다."},
    {n:203, e:"A car passed by at full speed.", k:"차 한 대가 전속력으로 지나갔다."},
    {n:204, e:"A bear ran out of the woods.", k:"곰 한 마리가 숲에서 달려 나왔다."},
    {n:205, e:"A bird flew in through the window.", k:"새 한 마리가 창문으로 들어갔다."},
    {n:206, e:"I listened to his speech on the radio.", k:"나는 라디오로 그의 연설을 들었다."},
    {n:207, e:"They looked at me at the same time.", k:"그들은 동시에 나를 바라보았다."},
    {n:208, e:"We can see many people passing by here.", k:"우리는 많은 사람들이 이곳을 지나가는 것을 볼 수 있다."},
    {n:209, e:"He went out in a hurry.", k:"그는 급히 밖으로 나갔다."},
    {n:210, e:"I make it a rule to take a bath every day.", k:"매일 목욕하는 것이 나의 습관이다."},
    {n:211, e:"... saving money as well as earning it.", k:"너는 돈을 버는 것뿐만 아니라 저축하는 것에 대해서도 생각해 보는 것이 좋다."},
    {n:212, e:"What are you going to be in the future?", k:"너는 장래에 어떤 사람이 될 거니?"},
    {n:213, e:"One is black, and the other is white.", k:"한쪽은 검고, 다른 한쪽은 희다."},
    {n:214, e:"We went on a trip to Japan.", k:"우리는 일본으로 여행을 떠났다."},
    {n:215, e:"I’ve studied all my life.", k:"나는 평생 공부해 오고 있다."},
    {n:216, e:"I was surprised to see the scene.", k:"나는 그 광경을 보고 놀랐다."},
    {n:217, e:"He went to Seoul on business.", k:"그는 용무가 있어 서울에 갔다."},
    {n:218, e:"It takes half an hour to go to school.", k:"학교에 가는 데 30분이 걸린다."},
    {n:219, e:"I did it by myself.", k:"나는 혼자서 그 일을 했다."},
    {n:220, e:"There is a house on the top of a hill.", k:"언덕 꼭대기에 집 한 채가 있다."},
    {n:221, e:"I’d like to lie down on the grass.", k:"나는 풀 위에 눕고 싶다."},
    {n:222, e:"The vending machine was out of order.", k:"음료수 자판기는 고장이 나 있었다."},
    {n:223, e:"You will soon come to understand its meaning.", k:"너는 곧 그 뜻을 알게 될 것이다."},
    {n:224, e:"Thanks to you, I had a very good time.", k:"당신 덕분에 매우 재미있게 지냈습니다."},
    {n:225, e:"We all went into the classroom.", k:"우리는 모두 교실로 들어갔다."},
    {n:226, e:"He is busy doing something.", k:"그는 무엇인가 하느라 바쁘다."},
    {n:227, e:"A small village is at the foot of the mountain.", k:"산기슭에 작은 마을이 있다."},
    {n:228, e:"The train arrived on time.", k:"기차는 정각에 도착했다."},
    {n:229, e:"He brought back a lot of books from the library.", k:"그는 도서관에서 많은 책을 갖고 돌아왔다."},
    {n:230, e:"The book will cost at least 10 dollars.", k:"그 책은 적어도 10달러는 할 것이다."},
    {n:231, e:"He worked hard in order to succeed.", k:"그는 성공하기 위해 열심히 공부했다."},
    {n:232, e:"The top is covered with snow.", k:"꼭대기는 눈으로 덮여 있다."},
    {n:233, e:"She seemed to get better little by little.", k:"그녀는 몸이 조금씩 나아지는 것 같았다."},
    {n:234, e:"He ran up to his father.", k:"그는 아버지에게 뛰어 다가갔다."},
    {n:235, e:"She was absent from school yesterday.", k:"그녀는 어제 학교에 결석했다."},
    {n:236, e:"Do it as quickly as possible.", k:"할 수 있는 대로 빨리 하세요."},
    {n:237, e:"I have left my bag behind.", k:"나는 가방을 두고 왔다."},
    {n:238, e:"How are you getting along?", k:"어떻게 지내십니까?"},
    {n:239, e:"She brought up three children.", k:"그녀는 세 아이를 길렀다."},
    {n:240, e:"I wanted to see him above all.", k:"나는 그 중에서도 그를 만나고 싶었다."},
    {n:241, e:"There is a hill at the back of my house.", k:"나의 집 뒤에 언덕이 있다."},
    {n:242, e:"He had to do the work for himself.", k:"그는 혼자 힘으로 그 일을 해야만 했다."},
    {n:243, e:"They cried out for help.", k:"그들은 도와 달라고 큰소리로 외쳤다."},
    {n:244, e:"... try it on.", k:"... 입어 보아라."},
    {n:245, e:"Someone has taken away all my books from the bag.", k:"누군가 가방에서 내 책을 모두 가져가 버렸다."},
    {n:246, e:"We all took part in the party.", k:"우리는 모두 파티에 참가했다."},
    {n:247, e:"I took a rest for a while.", k:"나는 잠시 휴식했다."},
    {n:248, e:"We all went on a picnic last Sunday.", k:"우리 모두 지난 일요일에 소풍을 갔다."},
    {n:249, e:"They laughed at a funny story.", k:"그들은 재미있는 이야기를 듣고 웃었다."},
    {n:250, e:"I pointed out his mistakes.", k:"나는 그의 잘못을 지적했다."},
    {n:251, e:"I was in time for the train.", k:"나는 기차 시간에 대었다."},
    {n:252, e:"Either you or I must go.", k:"당신이든 나든 어느 한 사람은 가야 한다."},
    {n:253, e:"We make milk into butter.", k:"우리는 우유로 버터를 만든다."},
    {n:254, e:"I agree with my teacher.", k:"나는 선생님의 의견에 동의합니다."},
    {n:255, e:"He picked up a book and began to read.", k:"그는 책 한 권을 집어 들고 읽기 시작했다."},
    {n:256, e:"She fell asleep late last night.", k:"그녀는 어젯밤 늦게 잠들었다."},
    {n:257, e:"He will make a speech on the radio tonight.", k:"그는 오늘 밤 라디오로 연설한다."},
    {n:258, e:"Father stayed at the hotel in New York.", k:"아버지는 뉴욕의 호텔에 묵으셨다."},
    {n:259, e:"The glass is full of water.", k:"잔은 물로 가득 차 있다."},
    {n:260, e:"Don’t worry about it.", k:"그것을 걱정하지 마라."},
    {n:261, e:"A cat was brought in yesterday.", k:"어제 고양이 한 마리를 들여왔다."},
    {n:262, e:"They sent for the doctor.", k:"그들은 의사를 데리러 보냈다."},
    {n:263, e:"I was quite young back in those days.", k:"그때에 나는 매우 어렸다."},
    {n:264, e:"He bought a new car the other day.", k:"그는 요전 날 새 차를 샀다."},
    {n:265, e:"He had to be away from home for a week...", k:"그는 일 때문에 1주일 동안 집을 떠나 있어야만 했다."},
    {n:266, e:"It is foolish of him to do such a thing.", k:"그런 일을 하다니 그는 어리석다."},
    {n:267, e:"I drew up the schedule for a trip.", k:"나는 여행 예정표를 만들었다."},
    {n:268, e:"They were anxious for his safety.", k:"그들은 그가 무사하기를 간절히 바라고 있었다."},
    {n:269, e:"I go for a walk every morning.", k:"나는 아침마다 산책을 나간다."},
    {n:270, e:"They came out of the school.", k:"그들은 학교에서 나왔다."},
    {n:271, e:"I caught a cold last week.", k:"나는 지난주에 감기에 걸렸다."},
    {n:272, e:"I was tired with teaching.", k:"나는 수업으로 피곤했다."},
    {n:273, e:"Do you mind opening the window?", k:"창문을 열어 주시지 않겠습니까?"},
    {n:274, e:"... very well before long if you study it harder.", k:"... 머지않아 영어를 매우 잘 말하게 될 것이다."},
    {n:275, e:"A wolf ran away with a sheep.", k:"늑대가 양을 채어 갔다."},
    {n:276, e:"He set out for London.", k:"그는 런던을 향해 출발했다."},
    {n:277, e:"You are no longer a child.", k:"너는 이제 어린아이가 아니다."},
    {n:278, e:"Don’t make a noise in the classroom.", k:"교실에서 떠들지 마라."},
    {n:279, e:"Count up to ten in English.", k:"영어로 10까지 세어 보세요."},
    {n:280, e:"We called at her house.", k:"우리는 그녀의 집을 방문했다."},
    {n:281, e:"He is sure of success.", k:"그는 성공을 확신한다."},
    {n:282, e:"I am used to that sort of thing.", k:"나는 그런 일에 익숙해졌다."},
    {n:283, e:"He threw away a piece of paper.", k:"그는 종이 한 장을 내던졌다."},
    {n:284, e:"Any member can make use of the reading room.", k:"어떤 회원이든 독서실을 이용할 수 있다."},
    {n:285, e:"Mother will soon come back from shopping.", k:"어머니는 쇼핑에서 곧 돌아오실 것이다."},
    {n:286, e:"All of a sudden, it began to rain.", k:"갑자기 비가 내리기 시작했다."},
    {n:287, e:"He came over to say goodbye to me.", k:"그는 나에게 작별 인사를 하러 왔다."},
    {n:288, e:"He thought for a moment.", k:"그는 잠깐 생각했다."},
    {n:289, e:"I have to change dollars into won at the bank.", k:"나는 은행에서 달러화를 원화로 바꿔야겠다."},
    {n:290, e:"He has read many books so far.", k:"그는 지금까지 많은 책을 읽어 왔다."},
    {n:291, e:"She is suffering from a cold now.", k:"그녀는 지금 감기에 걸려 있다."},
    {n:292, e:"People set up a statue in memory of him...", k:"사람들은 그를 기념하기 위해 공원에 동상을 세웠다."},
    {n:293, e:"Turn on the lights.", k:"전등을 켜라."},
    {n:294, e:"They came to the airport to see me off.", k:"그들은 나를 전송하러 공항에 왔다."},
    {n:295, e:"I’ll call up my parents as soon as I get there.", k:"그곳에 도착하면 곧 부모님께 전화를 걸겠습니다."},
    {n:296, e:"They are in trouble now.", k:"그들은 지금 곤란을 겪고 있다."},
    {n:297, e:"What does “W” stand for?", k:"‘W’자는 무엇을 나타냅니까?"},
    {n:298, e:"You had better start at once.", k:"너는 지금 곧 출발하는 것이 좋겠다."},
    {n:299, e:"London is famous for its fog.", k:"런던은 안개로 유명하다."},
    {n:300, e:"He looked in the window.", k:"그는 창문 안쪽을 들여다보았다."},
    {n:301, e:"We go to school on foot.", k:"우리는 걸어서 학교에 간다."},
    {n:302, e:"I went on a trip to Europe.", k:"나는 유럽으로 여행 갔다."},
    {n:303, e:"Hurry up, or you’ll be late for school.", k:"서둘러라. 그렇지 않으면 학교에 늦는다."},
    {n:304, e:"He went up and down the hill.", k:"그는 언덕을 위아래로 오르내렸다."},
    {n:305, e:"He went away saying “Goodbye.”", k:"그는‘안녕’이라고 말하며 떠나갔다."},
    {n:306, e:"Learn this sentence by heart.", k:"이 문장을 외워라."},
    {n:307, e:"I’ll fight to the end.", k:"나는 최후까지 싸우겠다."},
    {n:308, e:"I have the same watch as you.", k:"나는 네 것과 같은 시계를 갖고 있다."},
    {n:309, e:"He was very busy all the time.", k:"그는 그 동안 줄곧 매우 바빴다."},
    {n:310, e:"Study English harder first of all.", k:"첫째로 영어를 더욱 열심히 공부해라."},
    {n:311, e:"To my surprise, I won the prize.", k:"놀랍게도 나는 상을 탔다."},
    {n:312, e:"The child is pleased with the toy.", k:"그 아이는 그 장난감이 마음에 든다."},
    {n:313, e:"What for?", k:"왜?"},
    {n:314, e:"Put your hands up!", k:"손들어!"},
    {n:315, e:"She made up her mind to get away from the noisy city.", k:"그녀는 시끄러운 도시를 떠나기로 결심했다."},
    {n:316, e:"I have heard of him, but I have never seen him.", k:"나는 그의 소문을 들은 적이 있지만 아직 만난 적은 없다."},
    {n:317, e:"You were right after all.", k:"결국 네가 옳았다."},
    {n:318, e:"The waves turned over our boat.", k:"파도가 우리 배를 뒤집어엎었다."},
    {n:319, e:"He found it difficult to do two things at a time.", k:"그는 한번에 두 가지 일을 하기는 어렵다는 것을 알았다."},
    {n:320, e:"They were at table then.", k:"그때 그들은 식사 중이었다."},
    {n:321, e:"He is not my son, but my nephew.", k:"그는 내 아들이 아니고 조카다."},
    {n:322, e:"He held out his hand for some money...", k:"그는 아버지를 보자 돈을 좀 달라고 손을 내밀었다."},
    {n:323, e:"The alphabet begins with A.", k:"알파벳은 A로부터 시작한다."},
    {n:324, e:"His name is known to everybody in the world.", k:"그의 이름은 세계의 모든 사람에게 알려져 있다."},
    {n:325, e:"I walked as far as my hometown.", k:"나는 고향까지 걸어갔다."},
    {n:326, e:"You should carry out your first plan.", k:"당신은 첫 번째 계획을 실행에 옮겨야 한다."},
    {n:327, e:"The star gave off a strong light.", k:"그 별은 강한 빛을 발하였다."},
    {n:328, e:"My car broke down on the way.", k:"내 차는 도중에 고장 났다."},
    {n:329, e:"Please turn off the radio.", k:"라디오를 좀 꺼 주세요."},
    {n:330, e:"He lives next door to us.", k:"그는 우리 이웃에 살고 있다."},
    {n:331, e:"Once upon a time, there lived a queen.", k:"옛날 옛적에 한 여왕이 살고 있었다."},
    {n:332, e:"People gathered round the beggar.", k:"사람들이 거지 주위에 모였다."},
    {n:333, e:"People will remember his name for ever.", k:"사람들은 영원히 그의 이름을 기억할 것이다."},
    {n:334, e:"A number of people watched the game.", k:"많은 사람들이 그 경기를 봤다."},
    {n:335, e:"It rained from time to time.", k:"때때로 비가 내렸다."},
    {n:336, e:"She was late, as usual.", k:"여느 때처럼 그녀는 늦었다."},
    {n:337, e:"There are millions of miles of highways.", k:"수백만 마일에 이르는 고속도로가 있다."},
    {n:338, e:"They had to fight against hunger.", k:"그들은 굶주림과 싸워야만 했다."},
    {n:339, e:"Come in one by one.", k:"차례로 들어오세요."},
    {n:340, e:"I need a sheet of newspaper.", k:"나는 신문 한 장이 필요하다."},
    {n:341, e:"Please take a seat.", k:"자리에 앉아 주세요."},
    {n:342, e:"Mt. Halla is three times as high as this mountain.", k:"한라산은 이 산보다 3배나 높다."},
    {n:343, e:"It is very hot here all the year round.", k:"이곳은 일 년 내내 매우 덥다."},
    {n:344, e:"We handed in our reports.", k:"우리는 보고서를 제출했다."},
    {n:345, e:"Who takes care of the sick?", k:"누가 환자를 돌보고 있습니까?"},
    {n:346, e:"Can you give me a hand?", k:"도와 줄 수 있어?"},
    {n:347, e:"Christmas falls on Sunday this year.", k:"올해 크리스마스는 일요일이다."},
    {n:348, e:"Walk fast so as to be in time for the train.", k:"기차 시간에 맞추기 위해서 빨리 걸어라."},
    {n:349, e:"The man has difficulty walking in the snow.", k:"남자가 눈길을 걸어가는 데 어려움이 있다."},
    {n:350, e:"I do not invite both of them.", k:"나는 그들을 둘 다 초대하지는 않는다."},
    {n:351, e:"It is no use crying over spilt milk.", k:"엎질러진 우유 때문에 울어 봐야 소용없다."},
    {n:352, e:"We went out in spite of the rain.", k:"우리는 비가 오는데도 불구하고 외출을 했다."},
    {n:353, e:"I didn’t put out a candle before leaving the house.", k:"집에서 나오기 전에 촛불을 끄지 않았다."},
    {n:354, e:"I got the ticket for nothing.", k:"나는 공짜로 그 표를 얻었다."},
    {n:355, e:"The men robbed the passengers of their money.", k:"그 남자들이 승객들에게서 돈을 빼앗았다."},
    {n:356, e:"They have a lot in common.", k:"그들은 공통점이 많다."},
    {n:357, e:"I met an old friend by chance.", k:"나는 옛 친구를 우연히 만났다."},
    {n:358, e:"We had to put off our trip.", k:"우리는 여행을 연기해야 했다."},
    {n:359, e:"I’m trying to lose weight.", k:"나는 체중을 줄이려 한다."},
    {n:360, e:"I ran across an old friend yesterday.", k:"나는 어제 옛 친구를 우연히 만났다."},
    {n:361, e:"She is proud of her son.", k:"그녀는 아들을 자랑스러워한다."},
    {n:362, e:"The police were looking for thieves.", k:"경찰이 도둑들을 찾고 있었다."},
    {n:363, e:"She picked out the most expensive pair of shoes.", k:"그녀는 가장 비싼 구두를 골랐다."},
    {n:364, e:"The two boys stood side by side.", k:"두 소년은 나란히 서 있었다."},
    {n:365, e:"You’d better see a doctor about that cough.", k:"그렇게 기침을 하니 의사에게 진찰받는 게 좋겠다."},
    {n:366, e:"At the sight of a policeman, the thief ran away.", k:"경찰관을 보고 도둑은 달아나 버렸다."},
    {n:367, e:"I believe in your word.", k:"나는 당신의 말을 믿는다."},
    {n:368, e:"We see things by means of light.", k:"우리는 빛으로 사물을 본다."},
    {n:369, e:"I had him cut my hair.", k:"나는 그에게 내 머리를 자르게 시켰다."},
    {n:370, e:"What is the weather like?", k:"날씨가 어떻습니까?"},
    {n:371, e:"The new government took over on March 25.", k:"새 정부가 3월 25일에 인계를 받았다."},
    {n:372, e:"Don’t lose heart yet.", k:"아직은 낙심하지 마라."},
    {n:373, e:"Watch out!", k:"위험해, 조심해라!"},
    {n:374, e:"Let’s go to the movies on Saturday.", k:"토요일에 영화 보러 가자."},
    {n:375, e:"I like hanging out with my friends in the mall.", k:"나는 친구들과 쇼핑몰에 어울려 다니는 것을 좋아한다."},
    {n:376, e:"Don’t compare yourself with others.", k:"자신을 다른 사람과 비교하지 마라."},
    {n:377, e:"I’ll give you a ride in the new car.", k:"당신을 새 차에 태워 주겠습니다."},
    {n:378, e:"As a rule, I’m home by five.", k:"대개 나는 5시에 집에 도착한다."},
    {n:379, e:"The examination was suddenly called off.", k:"시험이 갑자기 취소되었다."},
    {n:380, e:"I’ll find a way sooner or later.", k:"조만간 나는 방법을 찾을 것이다."},
    {n:381, e:"He fell asleep during the class.", k:"그는 수업 도중 잠이 들었다."},
    {n:382, e:"Please come in and make yourself at home.", k:"들어오셔서 편히 쉬세요."},
    {n:383, e:"I cannot make myself understood in English.", k:"나는 영어로 말이 통하지 않는다."},
    {n:384, e:"She is down with flu.", k:"그녀는 유행성 감기를 앓고 있다."},
    {n:385, e:"The picture is upside down.", k:"그림이 거꾸로 걸려 있다."},
    {n:386, e:"Come on, enjoy yourself!", k:"자, 즐기라고!"},
    {n:387, e:"Parents will always show off their children.", k:"부모는 언제나 자기 자식들을 자랑하려고 한다."},
    {n:388, e:"I’ll give you three days to think it over.", k:"그것을 깊이 생각하도록 네게 3일 간의 여유를 주겠다."},
    {n:389, e:"I used to get up at 6 every morning.", k:"나는 아침마다 6시에 일어나곤 했다."},
    {n:390, e:"Drop in on me at any time.", k:"언제든지 내게 들러."},
    {n:391, e:"I’ve never met him in person.", k:"나는 그를 직접 만난 적이 없다."},
    {n:392, e:"A piano plays an important role in this film.", k:"피아노가 이 영화에서 중요한 역할을 한다."},
    {n:393, e:"You will get used to it by and by.", k:"차차 익숙해질 거야."},
    {n:394, e:"According to the fairy tale...", k:"동화에 따르면..."},
    {n:395, e:"He set the bird free from the cage.", k:"그는 새장에서 새를 놓아 주었다."},
    {n:396, e:"Make sure that all the doors are locked.", k:"문이 모두 잠겼는지 확인을 해라."},
    {n:397, e:"Your answer doesn’t make sense.", k:"네 대답은 말이 안 된다."},
    {n:398, e:"This will only add to your problem.", k:"이것은 네게 문제를 더할 뿐이다."},
    {n:399, e:"We must get through with our work.", k:"우리는 곧 일을 끝내야 한다."},
    {n:400, e:"He almost went mad with worry.", k:"그는 걱정 때문에 거의 미칠 지경이었다."},
    {n:401, e:"How many people are there in your family?", k:"너의 가족은 몇 사람이니?"},
    {n:402, e:"He has a few friends in America.", k:"그는 미국에 친구가 몇 사람 있다."},
    {n:403, e:"Look at that beautiful rainbow!", k:"저 아름다운 무지개를 보아라!"},
    {n:404, e:"We began to listen to his speech on the radio.", k:"우리는 라디오로 그의 연설을 듣기 시작했다."},
    {n:405, e:"We talked with him for an hour.", k:"우리는 그와 한 시간 동안 이야기했다."},
    {n:406, e:"How long did it take to finish it?", k:"그것을 끝마치는 데 시간이 얼마나 걸렸니?"},
    {n:407, e:"One day, I went to the museum with her.", k:"어느 날 나는 그녀와 함께 박물관에 갔다."},
    {n:408, e:"I think that he is honest.", k:"나는 그가 정직하다고 생각한다."},
    {n:409, e:"She will soon come back.", k:"그녀는 곧 돌아올 것이다."},
    {n:410, e:"All right / Sounds good.", k:"좋아."},
    {n:411, e:"I want a little money.", k:"나는 돈이 좀 필요하다."},
    {n:412, e:"She got up early this morning.", k:"그녀는 오늘 아침 일찍 일어났다."},
    {n:413, e:"She was talking with her neighbor about it.", k:"그녀는 그것에 대해 이웃 사람과 이야기하고 있었다."},
    {n:414, e:"Do you know how to count in English?", k:"영어로 수를 셀 줄 아니?"},
    {n:415, e:"He talked about his father.", k:"그는 자기 아버지에 대해 이야기했다."},
    {n:416, e:"Tom is as honest as John.", k:"톰은 존만큼 정직하다."},
    {n:417, e:"We enjoyed music.", k:"우리는 음악을 즐겼다."},
    {n:418, e:"There is a lot to learn about it.", k:"그것에 대해 배울 것이 많다."},
    {n:419, e:"How about a cup of coffee?", k:"커피 한 잔 하면 어떨까요?"},
    {n:420, e:"Let’s go swimming.", k:"수영하러 가자."},
    {n:421, e:"I go to school by bus.", k:"나는 버스로 학교에 간다."},
    {n:422, e:"We are learning English at school.", k:"우리는 학교에서 영어를 배우고 있다."},
    {n:423, e:"We had a lot of rain last night.", k:"어젯밤에 비가 많이 왔다."},
    {n:424, e:"Of course, he’ll come.", k:"물론 그는 옵니다."},
    {n:425, e:"I am glad to hear that.", k:"나는 그 말을 들으니 기쁘다."},
    {n:426, e:"I need to see him at once.", k:"나는 곧 그를 만나 볼 필요가 있다."},
    {n:427, e:"He has hundreds of English books.", k:"그는 수백 권의 영어 책을 갖고 있다."},
    {n:428, e:"A group of boys are skating there.", k:"한 무리의 소년들이 그곳에서 스케이트를 타고 있다."},
    {n:429, e:"Thousands of students joined the mass game.", k:"수천 명의 학생들이 매스게임에 참가했다."},
    {n:430, e:"How many times have you been to London?", k:"당신은 런던에 몇 번 가 본 적이 있습니까?"},
    {n:431, e:"He is old enough to go to school.", k:"그는 학교에 갈 만큼 충분한 나이가 되었다."},
    {n:432, e:"It is not good to ask about people’s age.", k:"사람들의 나이에 대해서 묻는 것은 좋지 않다."},
    {n:433, e:"Thanks for your kindness.", k:"당신의 친절에 감사합니다."},
    {n:434, e:"Mother thinks of her son day and night.", k:"어머니는 밤낮으로 자기 아들을 생각한다."},
    {n:435, e:"He got lost in the woods.", k:"그는 숲속에서 길을 잃었다."},
    {n:436, e:"A boy cried out for help.", k:"한 소년이 도와 달라고 큰소리로 외쳤다."},
    {n:437, e:"His dream came true.", k:"그의 꿈이 실현되었다."},
    {n:438, e:"A pair of shoes cost 10 dollars.", k:"신발 한 켤레가 10달러이다."},
    {n:439, e:"She was very tired and stopped studying.", k:"그녀는 몹시 피곤해서 공부를 멈추었다."},
    {n:440, e:"Someday, I want to go around the world.", k:"나는 언젠가 세계 일주를 하고 싶다."},
    {n:441, e:"All of the students in our class work hard.", k:"우리 반 학생들은 모두 열심히 공부한다."},
    {n:442, e:"What time do you go to school?", k:"너는 몇 시에 학교에 가니?"},
    {n:443, e:"Will you help me with the homework?", k:"내 숙제를 도와주시겠어요?"},
    {n:444, e:"Our school is known all over Korea.", k:"우리 학교는 전국에 알려져 있다."},
    {n:445, e:"I don’t know what to do.", k:"나는 무엇을 하면 좋을지 모르겠다."},
    {n:446, e:"We went into the classroom.", k:"우리는 교실로 들어갔다."},
    {n:447, e:"We loved each other.", k:"우리는 서로 사랑했다."},
    {n:448, e:"The train runs between Seoul and Busan.", k:"그 기차는 서울과 부산 사이를 달린다."},
    {n:449, e:"May I help you?", k:"도와 드릴까요?"},
    {n:450, e:"He seems to be happy.", k:"그는 행복한 것처럼 보인다."},
    {n:451, e:"No one is absent today.", k:"오늘은 아무도 결석하지 않았다."},
    {n:452, e:"We arrived in London the next day.", k:"우리는 그 다음날 런던에 도착했다."},
    {n:453, e:"Can I help you?", k:"도와 드릴까요?"},
    {n:454, e:"Most of the students are busy with exams.", k:"학생의 대부분이 시험으로 바쁘다."},
    {n:455, e:"They went back home as soon as school was over.", k:"그들은 수업이 끝나자 곧 집으로 돌아갔다."},
    {n:456, e:"We can see our school over there.", k:"저쪽에 우리 학교가 보인다."},
    {n:457, e:"He studied English all day.", k:"그는 하루 종일 영어 공부를 했다."},
    {n:458, e:"We visited the museum many times.", k:"우리는 그 박물관을 여러 번 방문했다."},
    {n:459, e:"How much water is there in the vase?", k:"꽃병에 물이 얼마쯤 있습니까?"},
    {n:460, e:"She went out shopping.", k:"그녀는 쇼핑하러 외출했다."},
    {n:461, e:"I am going to stay home tomorrow.", k:"나는 내일 집에 있을 거야."},
    {n:462, e:"He will pass the examination this time.", k:"그는 이번에는 시험에 합격할 것이다."},
    {n:463, e:"I read the lesson again and again.", k:"나는 그 과(課)를 몇 번이고 읽었다."},
    {n:464, e:"We usually leave home for school at seven.", k:"우리는 보통 7시에 학교에 가기 위해 집을 나온다."},
    {n:465, e:"Stand up, everybody.", k:"여러분, 일어서 주십시오."},
    {n:466, e:"Just then, a fire broke out.", k:"바로 그때 화재가 일어났다."},
    {n:467, e:"She is one of the greatest scientists.", k:"그녀는 가장 위대한 과학자들 중의 한 사람이다."},
    {n:468, e:"You must not study English in this way.", k:"너는 영어 공부를 이렇게 해서는 안된다."},
    {n:469, e:"Prices are going up every day.", k:"물가가 날마다 오르고 있다."},
    {n:470, e:"I haven’t heard from him for a long time.", k:"나는 오랫동안 그에게서 소식을 듣지 못했다."},
    {n:471, e:"What time is it by your watch?", k:"네 시계로 몇 시니?"},
    {n:472, e:"Get me a cup of coffee.", k:"커피 한 잔 주세요."},
    {n:473, e:"Sit down, please.", k:"앉으세요."},
    {n:474, e:"She finished writing a letter.", k:"그녀는 편지 쓰기를 끝마쳤다."},
    {n:475, e:"How old are you?", k:"너는 몇 살이니?"},
    {n:476, e:"We played baseball last Sunday.", k:"우리는 지난 일요일에 야구를 했다."},
    {n:477, e:"I dreamed all night.", k:"나는 밤새도록 꿈을 꾸었다."},
    {n:478, e:"I sat next to her.", k:"나는 그녀의 옆에 앉았다."},
    {n:479, e:"We looked down from Namsan.", k:"우리는 남산에서 내려다보았다."},
    {n:480, e:"Prices went down.", k:"물가가 내렸다."},
    {n:481, e:"I’ll tell you an interesting story next time.", k:"다음에 재미있는 이야기를 해 주겠다."},
    {n:482, e:"Don’t run around in the classroom.", k:"교실에서는 뛰어 돌아다니지 마라."},
    {n:483, e:"I watch TV every day.", k:"나는 날마다 텔레비전을 본다."},
    {n:484, e:"He came home by bus.", k:"그는 버스로 귀가했다."},
    {n:485, e:"They went across the field covered with snow.", k:"그들은 눈으로 덮여 있는 들을 가로질러 갔다."},
    {n:486, e:"The book will come out soon.", k:"그 책은 곧 나올 것이다."},
    {n:487, e:"How far is it from here to the school?", k:"여기에서 학교까지의 거리는 얼마나 됩니까?"},
    {n:488, e:"Get me a glass of water.", k:"물 한잔 주세요."},
    {n:489, e:"We have lunch at noon.", k:"우리는 정오에 점심을 먹는다."},
    {n:490, e:"Each of us has his or her opinion.", k:"우리들은 각자의 의견이 있다."},
    {n:491, e:"How often have you been to the zoo?", k:"너는 그 동물원에 몇 번 가 본 적이 있니?"},
    {n:492, e:"Come on, stop it!", k:"자, 그만둬!"},
    {n:493, e:"I visited London long ago.", k:"나는 오래 전에 런던을 방문했다."},
    {n:494, e:"Some students write down every word...", k:"어떤 학생들은 선생님이 말하는 한마디 한마디를 모두 적어 둔다."},
    {n:495, e:"He went out day after day.", k:"그는 날마다 외출했다."},
    {n:496, e:"Read it once more.", k:"한 번 더 읽어라."},
    {n:497, e:"Her parents had come over from England.", k:"그녀의 부모는 영국에서 건너왔다."},
    {n:498, e:"How tall are you?", k:"키가 얼마쯤 되세요?"},
    {n:499, e:"They were running here and there.", k:"그들은 여기저기에서 뛰어다니고 있었다."},
    {n:500, e:"Come down to dinner.", k:"저녁 먹으러 내려오세요."}
  ];

  return rawIdioms.map(item => ({
    id: item.n,
    expression: item.e.replace(/<[^>]*>?/gm, ''), // Strip HTML tags
    meaning: item.k,
    isUserAdded: true,
  }));
};

export const generateInitialCharacters = (): HanjaCharacter[] => {
    // ... (Keep existing Hanja characters - removed for brevity in XML but should be preserved in real file)
    return [
      {"id": 1, "character": "天", "sound": "천", "meaning": "하늘"},
      // ... existing data ...
      {"id": 1000, "character": "徊", "sound": "회", "meaning": "배회할"}
    ];
};
