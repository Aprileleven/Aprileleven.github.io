const ap = new APlayer({
  container: document.getElementById('aplayer'),
  fixed: true,
  // mini: true,
  autoplay: true,
  listFolded: true,
  preload: 'auto',
  mutex: true,
  // theme: '#FADFA3', //列表标签颜色,audio有设置theme这个就会失效
  loop: 'all',
 // lrcType: 1,
  // volume: 0.7, //默认音量
  audio: [
{ 
      theme: 'black',
      name: "Young And Beautiful",
      artist: 'Lana Del Rey',
      url: 'https://music.163.com/song/media/outer/url?id=26243686',
      cover: 'https://dss0.bdstatic.com/6Ox1bjeh1BF3odCf/it/u=810461753,2798397724&fm=85&app=63&f=GIF?w=121&h=75&s=AA8FA04CB2FBD27ECE4E86970300908B',
      // theme: '#fff' //进度条颜色
    },
{
	  theme: '#aa0000',
      name: "Love Is Gone (feat. Dylan Matthew) (Acoustic)",
      artist: 'SLANDER / Dylan Matthew',
      url: 'https://music.163.com/song/media/outer/url?id=1401671455',
      cover: 'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1730994325,3017991472&fm=26&gp=0.jpg',
      // theme: '#fff' //进度条颜色
    },
{
	  theme: '#aa0000',
      name: "我曾这样寂寞生活",
      artist: '饭碗的彼岸',
      url: 'https://music.163.com/song/media/outer/url?id=1364400123',
      cover: 'https://dss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3184045965,3518872733&fm=85&app=92&f=JPEG?w=121&h=75&s=5031A970AF9AA78481F099030000A091',
      // theme: '#fff' //进度条颜色
    },
{
      theme: '#aa5500',
      name: 'What Do You Mean?',
      artist: 'Justin Bieber',
      url: 'https://music.163.com/song/media/outer/url?id=34228719',
      cover: 'https://bkimg.cdn.bcebos.com/pic/37d3d539b6003af3c63bb3c6332ac65c1138b697?x-bce-process=image/resize,m_lfit,w_268,limit_1/format,f_jpg',
    },
{
	  theme: '#00ffff',
      name: "烟雨行舟",
      artist: '司南',
      url: 'https://music.163.com/song/media/outer/url?id=1301884692',
      cover: 'https://dss1.bdstatic.com/6OF1bjeh1BF3odCf/it/u=2407731310,719644177&fm=85&app=92&f=JPEG?w=121&h=75&s=44F139644332A27F42C1DC030100E0C1',
      // theme: '#fff' //进度条颜色
    },
    {
	  theme: '#55007f',
      name: "Purpose",
      artist: 'Justin Bieber',
      url: 'https://music.163.com/song/media/outer/url?id=36586466',
      cover: 'https://dss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3475463740,2329554102&fm=85&app=92&f=JPEG?w=121&h=75&s=07968464561172755680585F030080E0',
      // theme: '#fff' //进度条颜色
    },
{
	  theme: '#ff5500',
      name: "第三人称",
      artist: 'Todd Li',
      url: 'https://music.163.com/song/media/outer/url?id=453413861',
      cover: 'https://dss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=869080418,3826615429&fm=173&app=49&f=JPEG?w=312&h=208&s=9982137D47464D55548028D90300E0B9',
      // theme: '#fff' //进度条颜色
    },
 {
      theme: 'black',
      name: "i hate u,i love u",
      artist: 'gnash',
      url: 'https://music.163.com/song/media/outer/url?id=461544161',
      cover: 'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3070788624,3879931903&fm=26&gp=0.jpg',
      // theme: '#fff' //进度条颜色
    }

  ]
});


