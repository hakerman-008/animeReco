const express = require('express');
const app = express();
const port = 3000;


const animeRecommendations = [
  {
    animeName: 'Vinland Saga',
    video: 'https://v16m-default.akamaized.net/adffd71397f20308182eb3a5af0a1cf6/65bf929c/video/tos/useast2a/tos-useast2a-pve-0037c001-aiso/osfAGEDiuunFj9gLHf8F8HeGbPegDIIIIlQ3GL/?a=0&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=1902&bt=951&bti=OUBzOTg7QGo6OjZAL3AjLTAzYCMxNDNg&cs=0&ds=6&ft=XE5bCqT0m7jPD126AKMR3wUTV3yKMeF~O5&mime_type=video_mp4&qs=0&rc=ZTtpOWczNWY4Nmc0aWZmaUBpajhkcjY6Znc1azMzZjczM0A1L2BiLl4zNmIxXy1eNWEtYSNlMm5zcjRvMHNgLS1kMWNzcw%3D%3D&l=20240204073458602D1E610062DCEB5597&btag=e00088000',
  },
  {
    animeName: 'Death Note',
    video: 'https://v16m-default.akamaized.net/53d860864ed3341bb5fbbd28ffdce6d1/65bf9374/video/tos/maliva/tos-maliva-ve-0068c799-us/ooIj9qKAI4sOldgeGIQLXvLSREgCnAefISIyGE/?a=0&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=1380&bt=690&bti=OUBzOTg7QGo6OjZAL3AjLTAzYCMxNDNg&cs=0&ds=6&ft=XE5bCqT0m7jPD12cKKMR3wUTV3yKMeF~O5&mime_type=video_mp4&qs=0&rc=ZzZoNTkzZTY7ZTlpaGlkNUBpM2Voank5cmU3bzMzaTczNEBhYDMwLmA0XzYxMF4wL2ItYSNsX25nMmRrY2NgLS1kMTJzcw%3D%3D&l=20240204073830013B885B5082B6E0BFE4&btag=e00088000',
  },
  {
    animeName: 'Tales of Wedding Rings',
    video: 'https://v16m-default.akamaized.net/6e6966edfa6d0504aa3fcb5c3618f5d8/65bf94ab/video/tos/useast2a/tos-useast2a-pve-0068/ogE7SkIIQCgLJZPeeFLSfg0REasiQIAQGCijgH/?a=0&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=1420&bt=710&bti=OUBzOTg7QGo6OjZAL3AjLTAzYCMxNDNg&cs=0&ds=6&ft=XE5bCqT0m7jPD12Hx7MR3wUTV3yKMeF~O5&mime_type=video_mp4&qs=0&rc=NGVnNTg1aDQ6ZWVoPDVoOUBpMzw3Nms5cjRrcDMzNzczM0A2NmJgL2NeX2AxYF42YWFfYSMuZW5uMmQ0X2NgLS1kMTZzcw%3D%3D&l=202402040743429EE452B129328AE9EE84&btag=e00088000',
  },
  {
    animeName: 'Peter Grill and the Philosophers Time',
    video: 'https://v16m-default.akamaized.net/0327e6813b81d43ed4f49791913381b2/65bf94ff/video/tos/useast2a/tos-useast2a-pve-0068/ogE7SkIIQCgLJZPeeFLSfg0REasiQIAQGCijgH/?a=0&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=1420&bt=710&bti=OTg7QGo5QHM6OjZALTAzYCMvcCMxNDNg&cs=0&ds=6&ft=XE5bCqT0m7jPD127N7MR3wUTV3yKMeF~O5&mime_type=video_mp4&qs=0&rc=NGVnNTg1aDQ6ZWVoPDVoOUBpMzw3Nms5cjRrcDMzNzczM0A2NmJgL2NeX2AxYF42YWFfYSMuZW5uMmQ0X2NgLS1kMTZzcw%3D%3D&l=2024020407450689CA327B397148E5F389&btag=e00088000',
  },
  {
    animeName: 'Special A',
    video: 'https://v16m-default.akamaized.net/a608995762363c155fa2db45f652dbbd/65bf9545/video/tos/useast2a/tos-useast2a-ve-0068c003/o4BBEkaB6iNDEIeREQIgujAJLRQbYcUTTTaQfn/?a=0&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=1300&bt=650&bti=OUBzOTg7QGo6OjZAL3AjLTAzYCMxNDNg&cs=0&ds=6&ft=XE5bCqT0m7jPD12~T7MR3wUTV3yKMeF~O5&mime_type=video_mp4&qs=0&rc=ZTc2NTs4Z2VnaDg3ZGRnNUBpMztxamQ6ZnF0azMzNzczM0BiM182YzUyXjUxXy1hLjJhYSMzLzFicjQwM2hgLS1kMTZzcw%3D%3D&l=20240204074617668684EB710C52E5EAA7&btag=e00088000',
  },
  {
    animeName: 'Maid-sama!',
    video: 'https://v16m-default.akamaized.net/461c73d4b2d75547646e016f7de0dd73/65bf9577/video/tos/useast2a/tos-useast2a-ve-0068c002/oMQMRmEFkgJIEeBD0BZ8fTiDQEnyMOALEQbPas/?a=0&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=844&bt=422&bti=OTg7QGo5QHM6OjZALTAzYCMvcCMxNDNg&cs=0&ds=6&ft=XE5bCqT0m7jPD12GS7MR3wUTV3yKMeF~O5&mime_type=video_mp4&qs=0&rc=OzdlZzRkaDw2Njs5Zmc3N0Bpam43bDM6ZjQ5azMzNzczM0BeLjItLmBjNTExMmI1MTI1YSMtMmxtcjQwZWdgLS1kMTZzcw%3D%3D&l=20240204074719462791864F5610EA009B&btag=e00088000',
  },
  {
    animeName: 'Frieren: Beyond Journeys End',
    video: 'https://v16m-default.akamaized.net/33999fcf5491ff08e03f8009a7e96fa5/65bf95f9/video/tos/useast2a/tos-useast2a-ve-0068c001/oMSigHxAjFQAJAU2efZPZlYfhgZPIC4SSykCEA/?a=0&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=1616&bt=808&bti=OUBzOTg7QGo6OjZAL3AjLTAzYCMxNDNg&cs=0&ds=6&ft=XE5bCqT0m7jPD12_d7MR3wUTV3yKMeF~O5&mime_type=video_mp4&qs=0&rc=NjVnNWk6NGQzOzQ6ZWU7ZUBpajc7ODk6ZmRsbDMzNzczM0BiXjVfNjNhXjAxM2M0NS02YSMuLS40cjRfZWNgLS1kMTZzcw%3D%3D&l=202402040749206D2A22128A3641EA909E&btag=e00088000',
  },
  {
    animeName: 'Violet Evergarden',
    video: 'https://v16m-default.akamaized.net/719a419a517477caa8083ede838ad5cd/65bf9682/video/tos/useast2a/tos-useast2a-ve-0068c002/d29ed69b697d412f9377919f6586e0c4/?a=0&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=1594&bt=797&bti=OUBzOTg7QGo6OjZAL3AjLTAzYCMxNDNg&cs=0&ds=6&ft=XE5bCqT0m7jPD12-F7MR3wUTV3yKMeF~O5&mime_type=video_mp4&qs=0&rc=NzZnO2VlZzQ4PDg0NzU8O0BpM3A7ODU6Zjg7ZTMzNzczM0BiYjI0Ly0yXjAxMi0xMTFeYSNjZDVtcjRnL3NgLS1kMTZzcw%3D%3D&l=202402040751019D5D31AA5E5125EC657F&btag=e00090000',
  },
  {
    animeName: 'YOASOBI: Yuusha',
    video: 'https://v16m-default.akamaized.net/343698fac99afcf83578f29d1a8ed48f/65bf96b3/video/tos/alisg/tos-alisg-pve-0037c001/oo73ggIQlUBIS1NWBdeDg2nUEFARaLeIQTbzUt/?a=0&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=2802&bt=1401&bti=OUBzOTg7QGo6OjZAL3AjLTAzYCMxNDNg&cs=0&ds=3&ft=XE5bCqT0m7jPD12jb7MR3wUTV3yKMeF~O5&mime_type=video_mp4&qs=0&rc=N2g0NGhnaTw0ZTQ3Ojo3aUBpM3R1eWg6ZjhnbjMzODczNEA1YTNeMDU0XjIxY18zL2MyYSNoZ2BocjQwb19gLS1kMTFzcw%3D%3D&l=2024020407522483943B220C71D6E7FB85&btag=e00088000',
  },
  {
    animeName: 'Tomo-chan is a Girl!',
    video: 'https://v16m-default.akamaized.net/bd860824a560f78b38b01c467dbda279/65bf96f2/video/tos/useast2a/tos-useast2a-ve-0068c002/o4A7Al4ZsfXCYCUQIyhzGCNaEjJtomq8gkK2sI/?a=0&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=1670&bt=835&bti=OTg7QGo5QHM6OjZALTAzYCMvcCMxNDNg&cs=0&ds=6&ft=XE5bCqT0m7jPD12j57MR3wUTV3yKMeF~O5&mime_type=video_mp4&qs=0&rc=MzlnMzxmMzk8NTZoZGRlZ0BpM3JkaTk6ZnU8bTMzNzczM0A2LWItMDNjXzIxYDNjLjFiYSNhbTJgcjQwMzJgLS1kMTZzcw%3D%3D&l=2024020407532805C618D0D703A2E2C624&btag=e00088000',
  },
  {
    animeName: 'Monthly Girls Nozaki-kun',
    video: 'https://v16m-default.akamaized.net/9922e0541b66fb0c2518a240ead3e67c/65bf974f/video/tos/maliva/tos-maliva-ve-0068c799-us/ocZmt1S0zU30EmItA6fQpUITcANEyCBIhMwSCc/?a=0&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=1464&bt=732&bti=OUBzOTg7QGo6OjZAL3AjLTAzYCMxNDNg&cs=0&ds=6&ft=XE5bCqT0m7jPD12BC7MR3wUTV3yKMeF~O5&mime_type=video_mp4&qs=0&rc=ZjxoODs5ZDg2OTM1aTxnNUBpM3Z1Nzs6ZjxlbTMzZzczNEA2Nl82Ni5jNTYxNjJgYTItYSMvaGhucjRnYWdgLS1kMS9zcw%3D%3D&l=202402040755003CA02A74A8332AECBBDF&btag=e00088000',
  },
  {
    animeName: 'Banana Fish',
    video: 'https://v16m-default.akamaized.net/83aba9540edd2aac7bcb25efc615bdf7/65bf97a3/video/tos/maliva/tos-maliva-ve-0068c799-us/oUghSEWbjID8jkH1CGnf91e5KlufAACQ4TnDoI/?a=0&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=1326&bt=663&bti=OUBzOTg7QGo6OjZAL3AjLTAzYCMxNDNg&cs=0&ds=6&ft=XE5bCqT0m7jPD12qk7MR3wUTV3yKMeF~O5&mime_type=video_mp4&qs=0&rc=ZDtnNTZmZzk5ZTQ5NWU4ZEBpampnNTQ6ZmtzazMzZzczNEBiMS80NC8zX2AxNl4yYzYwYSNpcTVicjQwbnNgLS1kMS9zcw%3D%3D&l=20240204075631A8CBC86DF9F38EEE18A7&btag=e00088000',
  },
  {
    animeName: 'Buddy Daddies',
    video: 'https://v16m-default.akamaized.net/375929cb3985dc7dd2483e4b2e8d46f7/65bf97f6/video/tos/alisg/tos-alisg-pve-0037c001/oYgBiAneeJwCFFqmVRngABKE0RdQoQgbgkQySD/?a=0&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=1576&bt=788&bti=OTg7QGo5QHM6OjZALTAzYCMvcCMxNDNg&cs=0&ds=6&ft=XE5bCqT0m7jPD12-H7MR3wUTV3yKMeF~O5&mime_type=video_mp4&qs=0&rc=NGg6aTY0aTNkN2hlNTk4OkBpM3J0OTs6ZjNqajMzODczNEAtMC1fYmNfXl8xLjEyMGFiYSM1XjZxcjRnZV5gLS1kMS1zcw%3D%3D&l=202402040757255DE7FA75E5E950E40C7A&btag=e00088000',
  },
  {
    animeName: 'In This Corner of the World',
    video: 'https://v16m-default.akamaized.net/9eb9dc9b04c042ed58f186cb56b05f0c/65bf9814/video/tos/alisg/tos-alisg-pve-0037c001/o0eXEgonKC9vOzL8DFsfOAQFID5fbPpAUjI94r/?a=0&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=2726&bt=1363&bti=OUBzOTg7QGo6OjZAL3AjLTAzYCMxNDNg&cs=0&ds=3&ft=XE5bCqT0m7jPD126j7MR3wUTV3yKMeF~O5&mime_type=video_mp4&qs=0&rc=ZjxoaTRlZ2U7NjM3aDY4NEBpam1zb2U6ZnR5bjMzODczNEA1LS8uMF9hXmExMjIyLi5iYSNrMjZscjRvX2NgLS1kMTFzcw%3D%3D&l=2024020407582664C5DE55422357E58EA3&btag=e00088000',
  },
  {
    animeName: '	Grave of the Fireflies',
    video: 'https://v16m-default.akamaized.net/3d18c9f3b408b95e856d6ed2715ae6a6/65bf985d/video/tos/useast2a/tos-useast2a-ve-0068c003/oQSueSJNQvsIdED784efeIOmtFzOBYX4eggAAK/?a=0&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&br=878&bt=439&bti=OUBzOTg7QGo6OjZAL3AjLTAzYCMxNDNg&cs=0&ds=6&ft=XE5bCqT0m7jPD12p77MR3wUTV3yKMeF~O5&mime_type=video_mp4&qs=0&rc=aDk8aTU6ZjRpNWg1PDMzPEBpam45dnU5cm02cDMzNzgzM0BjMWMzYTEzX2IxMjQ0XmFiYSNrMzBvMmRrZHNgLS1kLzZzcw%3D%3D&l=20240204075921422C958A27F8D8E93C04&btag=e00088000',
  },
  {
    animeName: 'your name.',
    video: 'https://v16m-default.akamaized.net/f76d9b7f41cf84abf5e446bc0b4c3df1/65bf989a/video/tos/useast2a/tos-useast2a-ve-0068c001/ogZQAOXJWZB7ib7ICr1LTQ5WlQrEAPiU5SYWu/?a=0&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=4308&bt=2154&bti=OUBzOTg7QGo6OjZAL3AjLTAzYCMxNDNg&cs=0&ds=3&ft=XE5bCqT0m7jPD12qy7MR3wUTV3yKMeF~O5&mime_type=video_mp4&qs=0&rc=aTg4aWhkMzU0NTtpO2U6NkBpM3JncHM5cnB0bzMzNzgzM0A0XjQ2Yy4yNWMxYzZjMjFiYSNfLV4yMmQ0am5gLS1kLzZzcw%3D%3D&l=2024020408004741354CC0050BFFECBE56&btag=e00088000',
  },
  {
    animeName: '	Weathering With You',
    video: 'https://v16m-default.akamaized.net/2f3dc043984d97c5adb3013f9c58d8e7/65bf98fc/video/tos/alisg/tos-alisg-pve-0037/o8VykQzUIAAhDYIjtBAwEJWfZdj5xG3jmHdKqs/?a=0&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=5034&bt=2517&bti=OUBzOTg7QGo6OjZAL3AjLTAzYCMxNDNg&cs=0&ds=3&ft=XE5bCqT0m7jPD12VQ7MR3wUTV3yKMeF~O5&mime_type=video_mp4&qs=0&rc=NDZkN2ZnaTwzZjxlZTg0ZEBpM3E4bzs6ZnZ1bjMzODgzNEBfNTEvYTIyXy8xNjJiXzRfYSMwNl9icjRvMGVgLS1kLzFzcw%3D%3D&l=202402040802258F72E97948C177E6EE54&btag=e00088000',
  },
  {
    animeName: 'Toshi Densetsu Monogatari Hikiko',
    video: 'https://v16m-default.akamaized.net/2f7b22d20984ded2843d09c19d0db2e5/65bf99dd/video/tos/alisg/tos-alisg-pve-0037/o8VykQzUIAAhDYIjtBAwEJWfZdj5xG3jmHdKqs/?a=0&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=5034&bt=2517&bti=OUBzOTg7QGo6OjZAL3AjLTAzYCMxNDNg&cs=0&ds=3&ft=XE5bCqT0m7jPD12LM7MR3wUTV3yKMeF~O5&mime_type=video_mp4&qs=0&rc=NDZkN2ZnaTwzZjxlZTg0ZEBpM3E4bzs6ZnZ1bjMzODgzNEBfNTEvYTIyXy8xNjJiXzRfYSMwNl9icjRvMGVgLS1kLzFzcw%3D%3D&l=20240204080610173F08333BA55DE5CE96&btag=e00088000',
  },
  {
    animeName: 'Junji Ito Maniac:Japanese Tales of the Macabre',
    video: 'https://v16m-default.akamaized.net/55225ef60317473889943b400524c017/65bf9b7c/video/tos/useast2a/tos-useast2a-pve-0037-aiso/ow49IsfA22nBxULKhQzAUu5AKSxolAHBBUhRNm/?a=0&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=1374&bt=687&bti=OUBzOTg7QGo6OjZAL3AjLTAzYCMxNDNg&cs=0&ds=6&ft=XE5bCqT0m7jPD12sU7MR3wUTV3yKMeF~O5&mime_type=video_mp4&qs=0&rc=ZmQ7aTQ3PGhoNjM0NGlmZkBpM246ZzM6ZjM8aTMzZjgzM0AwYTBgNF9hX14xLjA1Li1hYSNqbmY2cjRnYjJgLS1kL2Nzcw%3D%3D&l=20240204081253C8EA5E2E5A05DCEA394D&btag=e00088000',
  },
  {
    animeName: 'After-school Hanako-kun',
    video: 'https://v16m-default.akamaized.net/8d1066ae3e9fffc242cea719b58df701/65bf9c33/video/tos/useast2a/tos-useast2a-ve-0068-euttp/o8wvkXBXd4BEE0Tn5DoxkiEz1QTTGiIZAgyk1/?a=0&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=2172&bt=1086&bti=OUBzOTg7QGo6OjZAL3AjLTAzYCMxNDNg&cs=0&ds=6&ft=XE5bCqT0m7jPD12jY7MR3wUTV3yKMeF~O5&mime_type=video_mp4&qs=0&rc=MzdoOzo5Nzg6OTo7OWY6ZUBpajo8c205cms0bjMzZjczM0AuNWExYjEuNV8xMzYvMDUxYSNubzNfMmRrY3BgLS1kMWNzcw%3D%3D&l=20240204081552EFA427BA8BA006EE5A1A&btag=e00088000',
  },
  {
    animeName: 'Dorohedoro: Ma no Omake',
    video: 'https://v16m-default.akamaized.net/4a4ad2e16b7286eb517a18229d863c55/65bf9c85/video/tos/maliva/tos-maliva-ve-0068c799-us/881719629d3b4c439152440f9e4246a8/?a=0&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=1966&bt=983&bti=OTg7QGo5QHM6OjZALTAzYCMvcCMxNDNg&cs=0&ds=6&ft=XE5bCqT0m7jPD123X7MR3wUTV3yKMeF~O5&mime_type=video_mp4&qs=0&rc=ZWhoOWk3Zzg7aTplOjdkaEBpamV4OGg6ZmZlajMzZzczNEBiMmAyMy4xXjYxNV41Yi5eYSMzM29ncjQwZTZgLS1kMS9zcw%3D%3D&l=20240204081728C6F5E469A20898E607C3&btag=e00088000',
  },
  {
    animeName: 'Police in a Pod',
    video: 'https://v16m-default.akamaized.net/e13a4f3a1b92ee6108188b4427260892/65bf9ce2/video/tos/maliva/tos-maliva-ve-0068c800-us/514f209128e94f88996dde3a07df498a/?a=0&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=996&bt=498&bti=OTg7QGo5QHM6OjZALTAzYCMvcCMxNDNg&cs=0&ds=6&ft=XE5bCqT0m7jPD12CE7MR3wUTV3yKMeF~O5&mime_type=video_mp4&qs=0&rc=aDY0MzZoN2lkOmY3Z2k4Z0BpM2g7Nmg6Zjx4OzMzNzgzM0BfYjMzNTIwNWAxMTUzLTBfYSNmLjA2cjRvX2ZgLS1kLzZzcw%3D%3D&l=20240204081850E0583E8F34CFCDEFEC0F&btag=e00088000',
  },
  {
    animeName: 'Natsumes Book of Friends',
    video: 'https://v16m-default.akamaized.net/d984fd955bee99a2968fb20c46233820/65bf9d42/video/tos/useast2a/tos-useast2a-pve-0037-aiso/b38944519f85458aa7049d4084081cc3/?a=0&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=1106&bt=553&bti=OUBzOTg7QGo6OjZAL3AjLTAzYCMxNDNg&cs=0&ds=6&ft=XE5bCqT0m7jPD12cf7MR3wUTV3yKMeF~O5&mime_type=video_mp4&qs=0&rc=M2c4PDs6aWlmNmVoaDVnM0BpMztvPGQ6ZjV0ZzMzZjgzM0BjNGAyNC4vNTAxLzNeYS80YSNwM25fcjRvajZgLS1kL2Nzcw%3D%3D&l=202402040820075662BA77C42544E948A1&btag=e00088000',
  },
  {
    animeName: 'Kamichu!',
    video: 'https://v16m-default.akamaized.net/810432fd0a35153d8fbfd6718f6266f8/65bf9d9a/video/tos/useast2a/tos-useast2a-ve-0068c001/5bb4a76b00424088a1c8ed0bda2e90c7/?a=0&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&br=770&bt=385&bti=OUBzOTg7QGo6OjZAL3AjLTAzYCMxNDNg&cs=0&ds=6&ft=XE5bCqT0m7jPD12mp7MR3wUTV3yKMeF~O5&mime_type=video_mp4&qs=0&rc=Zjs3Njo0O2k0ZDw2ZzozZEBpM3BkZTM6Zmc3NjMzNzczM0AwNDUwYTZiNmAxYDE1LzUwYSMyb2MwcjQwc3NgLS1kMTZzcw%3D%3D&l=20240204082136BB64396C1289AEE54BA4&btag=e00088000',
  },
  {
    animeName: '	Valkyrie Drive: Mermaid',
    video: 'https://v16m-default.akamaized.net/d6f9119fa0deb140762c2e2cc3b8ccd7/65bf9e1b/video/tos/useast2a/tos-useast2a-pve-0037-aiso/f00018d9de78439b99a025188c81ad68/?a=0&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=5590&bt=2795&bti=OTg7QGo5QHM6OjZALTAzYCMvcCMxNDNg&cs=0&ds=6&ft=XE5bCqT0m7jPD12uI7MR3wUTV3yKMeF~O5&mime_type=video_mp4&qs=0&rc=ZGY0PGU6NDY6NjtmaTU0N0Bpajl2a2U6ZjozOTMzZjgzM0BgMjA1XmFiXmAxMV42NTQzYSNvaWQucjRnNWxgLS1kL2Nzcw%3D%3D&l=202402040824122974DD8A0C94BBE7BA43&btag=e00088000',
  },
  {
    animeName: 'Kenka Banchou Otome: Girl Beats Boys',
    video: 'https://v16m-default.akamaized.net/edbf1b4c1a1209a97a46784100011716/65bf9e67/video/tos/maliva/tos-maliva-ve-0068c799-us/d092fd64e84c4c45b9ef45238665f1d2/?a=0&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=828&bt=414&bti=OTg7QGo5QHM6OjZALTAzYCMvcCMxNDNg&cs=0&ds=6&ft=XE5bCqT0m7jPD12jL7MR3wUTV3yKMeF~O5&mime_type=video_mp4&qs=0&rc=NWQ4aDQ2NjZnZTVkZDQ3Z0BpM2h0aWQ6Zmc7ajMzZzczNEAvYTZfLl9gNjMxMS1eYF5eYSNsX15wcjQwaWZgLS1kMS9zcw%3D%3D&l=20240204082527E09710DA14246AE4841F&btag=e00088000',
  },
  {
    animeName: 'Welcome to Demon School, Iruma-kun',
    video: 'https://v16m-default.akamaized.net/465e32dc7b3f0e31396d6332b322a222/65bf9ebd/video/tos/useast2a/tos-useast2a-pve-0037c001-aiso/oUCEiAGdrJz0AQPH64de27fmRZtEGHYgeAQrEf/?a=0&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=2580&bt=1290&bti=OUBzOTg7QGo6OjZAL3AjLTAzYCMxNDNg&cs=0&ds=6&ft=XE5bCqT0m7jPD12~R7MR3wUTV3yKMeF~O5&mime_type=video_mp4&qs=0&rc=N2U5Z2RlNjpnNzw8aGk2M0BpMzpzbzg6Zjs7aTMzZjgzM0BjYzEuLjI2NTUxL2M1X2EwYSNhZDNrcjRvM2hgLS1kL2Nzcw%3D%3D&l=2024020408264906F68BA859512DE989F7&btag=e00088000',
  },
  {
    animeName: 'In the Land of Leadale',
    video: 'https://v16m-default.akamaized.net/ca685dd848f68f48ce673171b3642a75/65bf9f09/video/tos/maliva/tos-maliva-ve-0068c799-us/9d001f566af74301a58f1143360195db/?a=0&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=668&bt=334&bti=OUBzOTg7QGo6OjZAL3AjLTAzYCMxNDNg&cs=0&ds=6&ft=XE5bCqT0m7jPD12_g7MR3wUTV3yKMeF~O5&mime_type=video_mp4&qs=0&rc=aWQ3ZDlkOmQ5PGU2aGUzO0BpM3dxZTQ6ZnU3OzMzZzczNEAtXjBgYTYzX2ExXmAyYDBiYSNhcmlicjRfLWRgLS1kMS9zcw%3D%3D&l=2024020408274423294FECDE3D5EE9ED95&btag=e00088000',
  },
  {
    animeName: 'Overlord',
    video: 'https://v16m-default.akamaized.net/7d98fb45372dd81460ae98cf947af405/65bf9fcc/video/tos/useast2a/tos-useast2a-pve-0068/1b34c6801f12457aa060ab651b7b649f/?a=0&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=2202&bt=1101&bti=OUBzOTg7QGo6OjZAL3AjLTAzYCMxNDNg&cs=0&ds=6&ft=XE5bCqT0m7jPD12ws7MR3wUTV3yKMeF~O5&mime_type=video_mp4&qs=0&rc=Nzw5NGhlZWg6NDo0NWY0PEBpamZmZDo6ZjRqZTMzNzczM0AwLl8wMy0xXmAxYDI2LjNfYSNiNjNncjRvaV9gLS1kMTZzcw%3D%3D&l=20240204083123B16753393D7E8AE7F3F8&btag=e00088000',
  },
  {
    animeName: 'Angels of Death',
    video: 'https://v16m-default.akamaized.net/0741e5f887e0542fe1eb6cdde2af2b39/65bfa024/video/tos/useast2a/tos-useast2a-pve-0037-aiso/0baf3ae69fb3495ab540b775be20a422/?a=0&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=1500&bt=750&bti=OUBzOTg7QGo6OjZAL3AjLTAzYCMxNDNg&cs=0&ds=6&ft=XE5bCqT0m7jPD12MP7MR3wUTV3yKMeF~O5&mime_type=video_mp4&qs=0&rc=aTpkOmU4Zjw7aGQ4ZTQ2N0BpMzRvcjo6ZjlpOjMzZjgzM0AyYDRjNGEzXjExNTYzLy1gYSNoMDBhcjRvLzBgLS1kL2Nzcw%3D%3D&l=2024020408321555AE2E13506FA7EC0AC5&btag=e00088000',
  },
  {
    animeName: 'Tower of God',
    video: 'https://v16m-default.akamaized.net/ec2f39af546d00c141a1ad6f0592de2a/65bfa046/video/tos/alisg/tos-alisg-pve-0037c001/owPfnbQgIDmgRfD8MAIA8Cw5gBjkAq9oXDfM72/?a=0&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=2968&bt=1484&bti=OUBzOTg7QGo6OjZAL3AjLTAzYCMxNDNg&cs=0&ds=6&ft=XE5bCqT0m7jPD12B67MR3wUTV3yKMeF~O5&mime_type=video_mp4&qs=0&rc=PDg4OWg0PDo0Nzw5aGdlZUBpM3l1bTc6ZnI3azMzODczNEAvYmJgMmMuXmIxYF42XzM0YSMyci4ucjQwNHNgLS1kMS1zcw%3D%3D&l=202402040833244BA9BD028E01F0ED2088&btag=e00088000',
  },
  {
    animeName: 'One-Punch Man',
    video: 'https://v16m-default.akamaized.net/52a1180c369bef28779c2192dc4aae51/65bfa090/video/tos/useast2a/tos-useast2a-pve-0068/700f866ed68047a2857a3ad42c3d60e2/?a=0&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=2918&bt=1459&bti=OTg7QGo5QHM6OjZALTAzYCMvcCMxNDNg&cs=0&ds=6&ft=XE5bCqT0m7jPD12E87MR3wUTV3yKMeF~O5&mime_type=video_mp4&qs=0&rc=Ozc0NDxoN2U3Nmk4NTM6aEBpM2VzZDQ6ZnA2ZTMzNzgzM0AyMi5iMTZeXi0xNi8zLjFgYSNmaWM0cjRnamdgLS1kLzZzcw%3D%3D&l=20240204083429F745CA1F795F6BE7386F&btag=e00088000',
  },
  {
    animeName: 'The Demon Prince of Momochi House',
    video: 'https://v16m-default.akamaized.net/6028468f4f37227e24acf41657b775e9/65bfa0bd/video/tos/useast2a/tos-useast2a-ve-0068c003/osABQ2rnRXlEfB3B4dBeRIktJZ1RioiQ4EIEbg/?a=0&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=1708&bt=854&bti=OUBzOTg7QGo6OjZAL3AjLTAzYCMxNDNg&cs=0&ds=6&ft=XE5bCqT0m7jPD12.m7MR3wUTV3yKMeF~O5&mime_type=video_mp4&qs=0&rc=OWQ5ODxnNDM6aDc5ZTRmOUBpamU0cnI5cmx3bzMzNzczM0BhMGE0YjU2NjExMmMwYmM2YSNhMC5fMmRjNWdgLS1kMTZzcw%3D%3D&l=20240204083522817EF566C1BF15EFFB6E&btag=e00088000',
  },
  {
    animeName: 'Kamisama Kiss',
    video: 'https://v16m-default.akamaized.net/4a75bc759965bd739d7fe681b845bbc4/65bfa113/video/tos/useast2a/tos-useast2a-pve-0068/ocpBrEkUA1fnSBO0QIJTNbD3eEARAQAXEA1DCI/?a=0&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=1248&bt=624&bti=OUBzOTg7QGo6OjZAL3AjLTAzYCMxNDNg&cs=0&ds=6&ft=XE5bCqT0m7jPD12ma7MR3wUTV3yKMeF~O5&mime_type=video_mp4&qs=0&rc=aDRkNDw8NzxmOmRmaTNmZUBpM3l3eGU6ZjVnajMzNzczM0AvNjEvMmIxNS8xMF8tYjExYSMtaWhkcjQwLy1gLS1kMTZzcw%3D%3D&l=202402040836323AD1901AD8C54DE70980&btag=e00088000',
  },
  {
    animeName: 'Ayaka',
    video: 'https://v16m-default.akamaized.net/c864067273bff0a62df747bbdbbcad13/65bfa13b/video/tos/alisg/tos-alisg-pve-0037c001/owGgCT0FJWfDRHeGseEQkkAAA1AbueVhKThIIn/?a=0&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=2622&bt=1311&bti=OTg7QGo5QHM6OjZALTAzYCMvcCMxNDNg&cs=0&ds=6&ft=XE5bCqT0m7jPD12vr7MR3wUTV3yKMeF~O5&mime_type=video_mp4&qs=0&rc=ZGg1ZzZoNDxkZGQ8NjZpOUBpM3gzZmQ6Znl3bTMzODczNEAvYTZfMF8tXjYxLi1gNS1eYSNrai1mcjRnNGRgLS1kMS1zcw%3D%3D&l=202402040837336A35F315A26B77EAD007&btag=e00088000',
  },
  {
    animeName: 'IRODUKU: The World in Colors',
    video: 'https://v16m-default.akamaized.net/04a2aa748a6a8c7ff05e3392664dd2c6/65bfa1b5/video/tos/useast2a/tos-useast2a-ve-0068c004/511fa97601dc46d9855df89490d762c6/?a=0&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&br=1746&bt=873&bti=OUBzOTg7QGo6OjZAL3AjLTAzYCMxNDNg&cs=0&ds=6&ft=XE5bCqT0m7jPD12Tz7MR3wUTV3yKMeF~O5&mime_type=video_mp4&qs=0&rc=M2hoZjwzMzw3OjhkNzQ5NUBpMztlODM6ZjlsNzMzNzczM0AzMzFhMGItNl4xNjYyLS0wYSNvXzNtcjRfZWFgLS1kMTZzcw%3D%3D&l=20240204083916CE1DBB40C13BA8EE5444&btag=e00088000',
  },
  {
    animeName: 'Violet Evergarden',
    video: 'https://v16m-default.akamaized.net/0a80901b631216d6af5b3048ff8f7cab/65bfa1e6/video/tos/useast2a/tos-useast2a-pve-0068/oMBm7cIokBAfqhP8ykK5DTt9bmzNgADU5Q6yGZ/?a=0&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=3872&bt=1936&bti=OUBzOTg7QGo6OjZAL3AjLTAzYCMxNDNg&cs=0&ds=3&ft=XE5bCqT0m7jPD12ch7MR3wUTV3yKMeF~O5&mime_type=video_mp4&qs=0&rc=ZTk2aWZlNjU3PGhlaWY4N0BpM3N1aTY6Zmh5bDMzNzgzM0AvM18tXzVfNi8xL14tYDBfYSNpZ2AwcjRfM2BgLS1kLzZzcw%3D%3D&l=202402040840228A425A3BFE5974E78F8F&btag=e00088000',
  },
  {
    animeName: 'PSYCHO-PASS',
    video: 'https://v16m-default.akamaized.net/ddf11ef298eddc74aabcfb351b6a0073/65bfa232/video/tos/useast2a/tos-useast2a-ve-0068c001/okBjRinhU9obSBmpSwAfJMSDQtLeIEkZBUQAU0/?a=0&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=1578&bt=789&bti=OUBzOTg7QGo6OjZAL3AjLTAzYCMxNDNg&cs=0&ds=6&ft=XE5bCqT0m7jPD122t7MR3wUTV3yKMeF~O5&mime_type=video_mp4&qs=0&rc=Nzc1MzgzNTs1MzY2ODNnNEBpam44Ojg6Zjc7azMzNzczM0AtLmFiM19iNjExX18yMTNjYSNqZ3FwcjRnNjZgLS1kMTZzcw%3D%3D&l=2024020408413709F19F13043B5FE6D5B4&btag=e00088000',
  },
  {
    animeName: 'Cyberpunk: Edgerunners',
    video: 'https://v16m-default.akamaized.net/3cd2eda979cd048ce937e30c92ea2a0c/65bfa299/video/tos/maliva/tos-maliva-ve-0068c799-us/oESBrilAWLznAcSqQDrVPHbhCeDesuDkgI1U28/?a=0&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=2136&bt=1068&bti=OUBzOTg7QGo6OjZAL3AjLTAzYCMxNDNg&cs=0&ds=6&ft=XE5bCqT0m7jPD12DA7MR3wUTV3yKMeF~O5&mime_type=video_mp4&qs=0&rc=PDZoNDo3MzVmaTk6PDxlNEBpang6Nzw6ZmtlbDMzZzgzNEAwNi1iLTMxNjUxNi1gYWAtYSNuams0cjRvZGpgLS1kLy9zcw%3D%3D&l=2024020408430804135EDA0E21E4E9E583&btag=e00088000',
  },
  {
    animeName: 'Tokyo Ghoul',
    video: 'https://v16m-default.akamaized.net/9ac96039cc461edd190866434dc8d3ee/65bfa2be/video/tos/alisg/tos-alisg-pve-0037c001/oEABUAIFVTWiZkBByYccqxYAEPCE9Qg52bv1i/?a=0&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=6178&bt=3089&bti=OUBzOTg7QGo6OjZAL3AjLTAzYCMxNDNg&cs=0&ds=3&ft=XE5bCqT0m7jPD12fV7MR3wUTV3yKMeF~O5&mime_type=video_mp4&qs=0&rc=Zzo2ZDY5NWg7aTtlaDplM0BpM3BkOWs5cjRxbjMzODczNEBiYjAyMWE0NmAxLTAxNWBhYSNgLnFfMmQ0MXJgLS1kMTFzcw%3D%3D&l=20240204084406577ED3252314BBE3030F&btag=e00088000',
  },
  {
    animeName: 'Akudama Drive',
    video: 'https://v16m-default.akamaized.net/00a415c9eb11b6451357b477f516c38e/65bfa31e/video/tos/alisg/tos-alisg-pve-0037/oY1lPIoiESI6xFgyAxQEKlLibfimq6BqABcAwj/?a=0&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=3566&bt=1783&bti=OUBzOTg7QGo6OjZAL3AjLTAzYCMxNDNg&cs=0&ds=3&ft=XE5bCqT0m7jPD12-_7MR3wUTV3yKMeF~O5&mime_type=video_mp4&qs=0&rc=ZzUzOzU8ZmY7ZTM4ZWhlPEBpM3RwbG85cjw8cDMzODgzNEAtMi9hYS5fNTYxYF9hYS9hYSNiNHBsMmRjNTFgLS1kLzFzcw%3D%3D&l=202402040845256B27751E8C675FE66FBE&btag=e00088000',
  },
  {
    animeName: 'The Iceblade Sorcerer Shall Rule the World',
    video: 'https://v16m-default.akamaized.net/57c7ec42f35d4ebcba90485c08992797/65bfa371/video/tos/useast2a/tos-useast2a-ve-0068c001/ocYjuVXfEAR7QR4nQI8w3FJnSbCeSnBDBEBPcU/?a=0&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=2658&bt=1329&bti=OUBzOTg7QGo6OjZAL3AjLTAzYCMxNDNg&cs=0&ds=6&ft=XE5bCqT0m7jPD12XK7MR3wUTV3yKMeF~O5&mime_type=video_mp4&qs=4&rc=OjszZGQ7aDdlMzVoNDo4aUBpM3h4M2g6Zm40aTMzNzczM0A2MzAyNDQtNS8xYjEtM19gYSNsZjJvcjRnX2JgLS1kMTZzcw%3D%3D&l=202402040846465092EB7F0F8286E7BE5F&btag=e00088000',
  },
  {
    animeName: 'Reign of the Seven Spellblades',
    video: 'https://v16m-default.akamaized.net/2fcc943c64aaf1eeebbcf18affac4328/65bfa393/video/tos/alisg/tos-alisg-pve-0037c001/oUR8nBSJACWEhQ5lRlQeD8GDIBfbLCSOognXEF/?a=0&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=2492&bt=1246&bti=OUBzOTg7QGo6OjZAL3AjLTAzYCMxNDNg&cs=0&ds=6&ft=XE5bCqT0m7jPD12A37MR3wUTV3yKMeF~O5&mime_type=video_mp4&qs=0&rc=OWc2OWY5OWRnZDgzODxkNEBpajQ3aTQ6Zjc4bjMzODczNEAvMl4wYGFfNjAxYWMwNTUtYSM1YW0ucjRncjRgLS1kMS1zcw%3D%3D&l=20240204084731B573BD7161E80AEF44C8&btag=e00088000',
  },
  {
    animeName: 'My Dress-Up Darling',
    video: 'https://v16m-default.akamaized.net/ae841fc8f0ac427b71263b8df5d61d9a/65bfa3ec/video/tos/useast2a/tos-useast2a-pve-0037-aiso/o82RKKumxInCBGhHSAyfVSWhU3zQa1A3IoNv9u/?a=0&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=1978&bt=989&bti=OUBzOTg7QGo6OjZAL3AjLTAzYCMxNDNg&cs=0&ds=6&ft=XE5bCqT0m7jPD12rq7MR3wUTV3yKMeF~O5&mime_type=video_mp4&qs=0&rc=Nzk0OjxlOTZlPDY0ZGU7NEBpM3B5ZTo6ZjduaDMzZjgzM0BgNS8xYTUuXmExYjIxMjIvYSNrY2phcjQwajVgLS1kL2Nzcw%3D%3D&l=202402040848578E8C8896333BF7EB093C&btag=e00088000',
  },
  {
    animeName: 'One Piece',
    video: 'https://v16m-default.akamaized.net/93d6634759a5d6a4685d3e6c2d54232c/65bfa4bf/video/tos/maliva/tos-maliva-ve-0068c799-us/oIQLIgDqRq0hAeDltFUWfgIW2RnEdESgSZdhBi/?a=0&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=2266&bt=1133&bti=OUBzOTg7QGo6OjZAL3AjLTAzYCMxNDNg&cs=0&ds=6&ft=XE5bCqT0m7jPD12wxWMR3wUTV3yKMeF~O5&mime_type=video_mp4&qs=0&rc=ZTM5OTo7NzM4NDxmaDQ6NkBpamo7ZG05cnF3cDMzZzczNEBfNDQwMTIwXzQxNDMwLTQyYSNhbW9vMmRjNS9gLS1kMS9zcw%3D%3D&l=202402040851393103B2C5991581E9734F&btag=e00090000',
  },
  {
    animeName: 'That Time I Got Reincarnated as a Slime',
    video: 'https://v16m-default.akamaized.net/3f98feda92c5dbfebf3392ce59bccce7/65bfa580/video/tos/useast2a/tos-useast2a-ve-0068c001/ogNEQNcWzgEyfcjCDdhNphIIDAkULKpoGmILmA/?a=0&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=1496&bt=748&bti=OUBzOTg7QGo6OjZAL3AjLTAzYCMxNDNg&cs=0&ds=6&ft=XE5bCqT0m7jPD12WNWMR3wUTV3yKMeF~O5&mime_type=video_mp4&qs=0&rc=Ozw1OTk2aDlkZzozOWlnOEBpM3Zobzk6ZjRtajMzNzczM0A0NS5eLzBjXmMxNTJeNTE2YSMyZmgycjRnM2JgLS1kMTZzcw%3D%3D&l=20240204085332FFC25B3CD343A0EF8DE7&btag=e00090000',
  },
  {
    animeName: 'Jujutsu Kaisen',
    video: 'https://v16m-default.akamaized.net/c58925199ad7bc33494ff44e33923f5d/65bfa56b/video/tos/alisg/tos-alisg-pve-0037/oMAMKozTgsatYBPIDhRYoJLhQ6JfIByOAEwAJ3/?a=0&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=1228&bt=614&bti=OUBzOTg7QGo6OjZAL3AjLTAzYCMxNDNg&cs=0&ds=3&ft=XE5bCqT0m7jPD12hTWMR3wUTV3yKMeF~O5&mime_type=video_mp4&qs=0&rc=aDppaTo8ZTVmNmdkMzo7Z0BpM3EzcDw6ZjhubjMzODgzNEBfXzBeLjUzX2MxY2E0NV8vYSNxcS5kcjRvbC5gLS1kLy1zcw%3D%3D&l=20240204085517299213308951A1ECC6AE&btag=e00088000',
  },
  {
    animeName: 'Gintama',
    video: 'https://v16m-default.akamaized.net/977149988224ddfba3e3ad1a7679953e/65bfa5b8/video/tos/useast2a/tos-useast2a-ve-0068c004/77a010e55dd641ad987f9743423e2fb3/?a=0&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=1602&bt=801&bti=OUBzOTg7QGo6OjZAL3AjLTAzYCMxNDNg&cs=0&ds=6&ft=XE5bCqT0m7jPD12ySWMR3wUTV3yKMeF~O5&mime_type=video_mp4&qs=0&rc=PDQzaGQzM2U5Mzw4Z2hoZkBpanE0a2Q6Zm9vOzMzNzczM0BgYTAwMzExNTIxYF4zNWE0YSNuZmBzcjQwMWVgLS1kMTZzcw%3D%3D&l=20240204085628F909AB3A86A7E5D17739&btag=e00088000',
  },
  {
    animeName: 'Fullmetal Alchemist: Brotherhood',
    video: 'https://v16m-default.akamaized.net/33379012da5e354772e5f22c7ca0b4b8/65bfa614/video/tos/maliva/tos-maliva-ve-0068c799-us/o0I24JwINCJDdAjfvuEAH8DHZln8eeQXrbso8k/?a=0&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=2188&bt=1094&bti=OUBzOTg7QGo6OjZAL3AjLTAzYCMxNDNg&cs=0&ds=6&ft=XE5bCqT0m7jPD12QdWMR3wUTV3yKMeF~O5&mime_type=video_mp4&qs=0&rc=OjU0NTc3OTk8OmU2ZDZlZ0BpM3h3aWU6ZnQ8bTMzZzczNEAxYGMvYF4xNl8xLjIzLmA2YSNqZHJxcjQwYHBgLS1kMS9zcw%3D%3D&l=20240204085759372ECE45BFD9DEECCC71&btag=e00088000',
  },
  {
    animeName: 'Delicious in Dungeon',
    video: 'https://v16m-default.akamaized.net/a2d4f31f70b8b868e25b4a88a186536b/65bfa660/video/tos/alisg/tos-alisg-pve-0037/ocgGcLe8rLQHMoDnCKMt2CXaoVgLAAJQffoMIE/?a=0&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=1774&bt=887&bti=OUBzOTg7QGo6OjZAL3AjLTAzYCMxNDNg&cs=0&ds=3&ft=XE5bCqT0m7jPD12sFWMR3wUTV3yKMeF~O5&mime_type=video_mp4&qs=0&rc=aWY8NGZnNmU7ZzhpPGYzZEBpajRkd3M5cmtncDMzODgzNEAvNDQtNWA0XjQxM18wNWA2YSNrb2w0MmRjLV9gLS1kLzFzcw%3D%3D&l=20240204085845EFAB532CF3C97FEEAE76&btag=e00088000',
  },
  {
    animeName: 'Mashle: Magic and Muscles',
    video: 'https://v16m-default.akamaized.net/8b55bbcb857c94603cc91bf64cd994e7/65bfa6b7/video/tos/alisg/tos-alisg-pve-0037c001/oQNZRlGzmeREEdjsBAIk38SfK31gtFQDgEUBYX/?a=0&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=1854&bt=927&bti=OTg7QGo5QHM6OjZALTAzYCMvcCMxNDNg&cs=0&ds=3&ft=XE5bCqT0m7jPD12FbWMR3wUTV3yKMeF~O5&mime_type=video_mp4&qs=0&rc=M2g2NzU2NDQ3Ojg2ZDplNkBpM3VodHg5cjVxcDMzODczNEA2XmFiYjIzX2AxLmM2Li5gYSNqMTRgMmRrNmBgLS1kMTFzcw%3D%3D&l=2024020409004161804C6E074454E7EB4B&btag=e00088000',
  },
  {
    animeName: 'Lookism',
    video: 'https://v16m-default.akamaized.net/7a5cad4cec615b55c952c7be19675401/65bfa73c/video/tos/useast2a/tos-useast2a-pve-0068/oEJlkaANPB9wQ1E5FpiZ6YiGiQWSBZ5SE7jIU/?a=0&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=1870&bt=935&bti=OUBzOTg7QGo6OjZAL3AjLTAzYCMxNDNg&cs=0&ds=6&ft=XE5bCqT0m7jPD12qOWMR3wUTV3yKMeF~O5&mime_type=video_mp4&qs=0&rc=M2g3PGkzPGZmaTtnZGczOkBpM2xvZm85cnNsbzMzNzczM0AuXzRhMDNhNTUxYC9fMy0yYSNlaDRgMmQ0NGhgLS1kMTZzcw%3D%3D&l=202402040902399D1BDFCD0FC303F1A770&btag=e00088000',
  },
  {
    animeName: 'attack on titan',
    video: 'https://v16m-default.akamaized.net/6ad51935f822d962f5b05be7dcc8717a/65bfa78f/video/tos/useast2a/tos-useast2a-pve-0037-aiso/b31f30053f3e4166abd3eac95d2748b7/?a=0&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=3150&bt=1575&bti=OUBzOTg7QGo6OjZAL3AjLTAzYCMxNDNg&cs=0&ds=6&ft=XE5bCqT0m7jPD12pkWMR3wUTV3yKMeF~O5&mime_type=video_mp4&qs=0&rc=Njc0Ojo7NTQ1Ojw8OzYzO0BpM3JlNjM6Zmo6PDMzZjgzM0AvYl8vLTQtXy4xMmFhLzQuYSNoMGZgcjRfbTJgLS1kL2Nzcw%3D%3D&l=20240204090425E5E068DF04F3DEEC7D50&btag=e00088000',
  },
  {
    animeName: 'solo leveling',
    video: 'https://v16m-default.akamaized.net/3d040df60b640acc93e9f75061894085/65bfa7b4/video/tos/alisg/tos-alisg-pve-0037c001/o8Q9fRBlEoFpKFamtYdDhggEU9BfAICnOIFXEt/?a=0&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=4126&bt=2063&bti=OUBzOTg7QGo6OjZAL3AjLTAzYCMxNDNg&cs=0&ds=3&ft=XE5bCqT0m7jPD12OHWMR3wUTV3yKMeF~O5&mime_type=video_mp4&qs=0&rc=NjQ2Zjs5NWg1ODozOzg4N0BpM3h2bHA5cjVncDMzODczNEA2Yl4zY14xNjExLzUyLi4yYSNqbnBkMmQ0MmVgLS1kMTFzcw%3D%3D&l=20240204090512FA94977909A15EEA80C3&btag=e00088000',
  },
  {
    animeName: 'demon slayer',
    video: 'https://v16m-default.akamaized.net/ca7a23b29e03195e860bc40185e3a8f0/65bfa81b/video/tos/alisg/tos-alisg-pve-0037/oAOXEeQVQCHIucn1BHg8gN4pIbhsksDBfQXo0A/?a=0&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=6682&bt=3341&bti=OUBzOTg7QGo6OjZAL3AjLTAzYCMxNDNg&cs=0&ds=3&ft=XE5bCqT0m7jPD12ajWMR3wUTV3yKMeF~O5&mime_type=video_mp4&qs=0&rc=NmRkZTNlaTk2aThkZDkzZ0BpM2pzdWQ6ZnU7ajMzODgzNEAwYjEzMmJeNmAxNWJgLTNeYSNjaXIycjQwX25gLS1kLy1zcw%3D%3D&l=202402040906495F4A4262FC5E3FEFD0F2&btag=e00088000',
  },
  {
    animeName: 'hell paradise',
    video: 'https://v16m-default.akamaized.net/a7eddf4c0ea3c648b515ad2daf60db17/65bfa87c/video/tos/useast2a/tos-useast2a-ve-0068c003/osBEY5QUDEnARJNeAnBbpkBYYEfBREQ2I3nLb9/?a=0&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=3280&bt=1640&bti=OUBzOTg7QGo6OjZAL3AjLTAzYCMxNDNg&cs=0&ds=6&ft=XE5bCqT0m7jPD125yWMR3wUTV3yKMeF~O5&mime_type=video_mp4&qs=0&rc=Mzo2OTQ1Mzk2NjU3ZDo3PEBpM2U6cGY6ZjQzazMzNzczM0BhXzJgYDJhXl8xMTZfYS1fYSNgbnNjcjQwYC9gLS1kMTZzcw%3D%3D&l=20240204090819C1DDF7AD855EEBEF2407&btag=e00088000',
  },
  {
    animeName: 'Monster(onepiece)',
    video: 'https://v16m-default.akamaized.net/0d8cca642a06b1965254743ac738e773/65bfa954/video/tos/maliva/tos-maliva-ve-0068c799-us/oUiToBICIBAf1EKtQyKwmzRQpAiG3g1BsGxGu7/?a=0&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=1342&bt=671&bti=OUBzOTg7QGo6OjZAL3AjLTAzYCMxNDNg&cs=0&ds=6&ft=XE5bCqT0m7jPD12-JWMR3wUTV3yKMeF~O5&mime_type=video_mp4&qs=0&rc=ZGlpaDU4NzU6OTw4MzQ1OEBpanE0c3U5cjZycDMzZzczNEBfY18wYmJfXzExNjNgYy0vYSNtLmk1MmRjM2pgLS1kMS9zcw%3D%3D&l=202402040912053042041BE1457DE962D5&btag=e00088000',
  },
  {
    animeName: 'spy x family',
    video: 'https://v16m-default.akamaized.net/046e01e1fd1ab08f3a2fa24f419a4285/65bfa997/video/tos/alisg/tos-alisg-pve-0037/oYJICkXnEFAxxdQgEV9DQ5Ov12UCCsl3tBffBN/?a=0&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=3158&bt=1579&bti=OUBzOTg7QGo6OjZAL3AjLTAzYCMxNDNg&cs=0&ds=3&ft=XE5bCqT0m7jPD12aZWMR3wUTV3yKMeF~O5&mime_type=video_mp4&qs=0&rc=Mzw0M2U8ODM8NjdkNmZoZkBpanB0aXA5cmhvbzMzODgzNEAzNTMzNi8vNS8xLTMxYmEyYSNnc21gMmRjLm9gLS1kLy1zcw%3D%3D&l=20240204091313D0DC43C1EA63C5F002D0&btag=e00088000',
  },
  {
    animeName: 'naruto',
    video: 'https://v16m-default.akamaized.net/44bca611ffdf7fa7a974d65d19801fd5/65bfa9ec/video/tos/alisg/tos-alisg-pve-0037/og5caFQPIhwDp8FArbyBlzZAkE7mqxatwAqfkK/?a=0&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=3344&bt=1672&bti=OUBzOTg7QGo6OjZAL3AjLTAzYCMxNDNg&cs=0&ds=3&ft=XE5bCqT0m7jPD12kMWMR3wUTV3yKMeF~O5&mime_type=video_mp4&qs=0&rc=ZThlNzZoPDc0Z2U7NWZpZ0BpamppPDg6ZmhwbjMzODgzNEBjLl5fM2MyXjYxM2BgLS4vYSM0MGRpcjRfbmZgLS1kLzFzcw%3D%3D&l=2024020409142514E6FB34625CB8E878EA&btag=e00088000',
  },
  {
    animeName: 'chainsaw man',
    video: 'https://v16m-default.akamaized.net/7b8afded23369381d3de5e4265daf969/65bfaa0e/video/tos/alisg/tos-alisg-pve-0037/ochK9tEvFcNH1Nz1AwNtfUAoQnIG9ECLA5FyMB/?a=0&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=5484&bt=2742&bti=OUBzOTg7QGo6OjZAL3AjLTAzYCMxNDNg&cs=0&ds=3&ft=XE5bCqT0m7jPD12ieWMR3wUTV3yKMeF~O5&mime_type=video_mp4&qs=0&rc=ZmZpZTRlNGQ0MzQ1NGg0M0BpajlxNDg6ZjhtajMzODgzNEAwNGEzYS41XjExYzJjYzUuYSNqXnNecjRnNGtgLS1kLy1zcw%3D%3D&l=20240204091511858667CD6EF1ABE8EBBF&btag=e00088000',
  },
  {
    animeName: 'bleach',
    video: 'https://v16m-default.akamaized.net/d95411a3723a4405c340591074c4b6ea/65bfaa5c/video/tos/alisg/tos-alisg-pve-0037c001/oQyBIIGFxIoBCyAGBAwf7qOhUSzQjHASPwNQ8V/?a=0&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=2004&bt=1002&bti=OUBzOTg7QGo6OjZAL3AjLTAzYCMxNDNg&cs=0&ds=6&ft=XE5bCqT0m7jPD120uWMR3wUTV3yKMeF~O5&mime_type=video_mp4&qs=0&rc=NztkOWRpZDpmZjZlaTZpZUBpM2w8bzk6ZjpqaDMzODczNEBfNTE0LjNjXy4xYWNjX15gYSMwMl5lcjRnYi1gLS1kMS1zcw%3D%3D&l=20240204091628060D544EB85816F188AB&btag=e00088000',
  },
  {
    animeName: 'blue lock',
    video: 'https://v16m-default.akamaized.net/5bf2b0bd08f7457792207aa4e31c22b9/65bfaadc/video/tos/alisg/tos-alisg-pve-0037/o04PBBbnQQMxVYkCthKGwHH4fBlA6DYFegL9og/?a=0&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=3758&bt=1879&bti=OUBzOTg7QGo6OjZAL3AjLTAzYCMxNDNg&cs=0&ds=3&ft=XE5bCqT0m7jPD12A-WMR3wUTV3yKMeF~O5&mime_type=video_mp4&qs=0&rc=NjdkZzs0NGVkOmU0aGU1NEBpajY1PDk6ZmlyajMzODgzNEBgNDUzL142NWExXjQuYDMwYSNlbHBfcjRfYGNgLS1kLy1zcw%3D%3D&l=20240204091827FC342DE2A151C5E57D4C&btag=e00088000',
  },
  {
    animeName: 'TENGOKU DAIMAKYO (HEAVENLY DELUSION)',
    video: 'https://v16m-default.akamaized.net/be8ffa121594348d56bc645631f86096/65bfab4c/video/tos/alisg/tos-alisg-pve-0037/owchP50NIKNCQHOBZ7PzNB3VIdAfQ7fgC4nkEs/?a=0&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=4222&bt=2111&bti=OUBzOTg7QGo6OjZAL3AjLTAzYCMxNDNg&cs=0&ds=6&ft=XE5bCqT0m7jPD12J.WMR3wUTV3yKMeF~O5&mime_type=video_mp4&qs=0&rc=Z2Q3OTMzOTVnMzk8Zzc5aEBpanN5ZWc6Zmh4ajMzODgzNEAyLzMxLTQxNjQxYmM2LTIyYSNvNS4ycjRnNXFgLS1kLy1zcw%3D%3D&l=20240204092032D813941C55E4F2EDD1E9&btag=e00088000',
  },
  {
    animeName: ' SKIP AND LOAFER',
    video: 'https://v16m-default.akamaized.net/75ee9a46ed88401f2cf8ad8e9e8143c7/65bfabae/video/tos/alisg/tos-alisg-pve-0037/oAkCQ1tpjBYIRAeVUBtEKr4QCbCjg2bRL6HnDe/?a=0&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=1332&bt=666&bti=OUBzOTg7QGo6OjZAL3AjLTAzYCMxNDNg&cs=0&ds=3&ft=XE5bCqT0m7jPD12TUWMR3wUTV3yKMeF~O5&mime_type=video_mp4&qs=0&rc=NGczaGc0NGk0OTk6OmVpPEBpM2Y6PGQ6ZjtrazMzODgzNEBfLWM0NTMtNV8xMV4vLTVeYSNjYV5ecjRvcWpgLS1kLy1zcw%3D%3D&l=2024020409215659984CAFA327B9F01116&btag=e00088000',
  },
  {
    animeName: 'TRIGUN STAMPEDE',
    video: 'https://v16m-default.akamaized.net/bffe7a75e17263a6fd88697e9a2f878f/65bfac44/video/tos/maliva/tos-maliva-ve-0068c799-us/238cca6c5f3f40c99349ff5c5aa87fd2/?a=0&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=1748&bt=874&bti=OTg7QGo5QHM6OjZALTAzYCMvcCMxNDNg&cs=0&ds=6&ft=XE5bCqT0m7jPD12D0WMR3wUTV3yKMeF~O5&mime_type=video_mp4&qs=0&rc=N2VpNWdmO2QzOzk8aTRpNEBpMzxxOGg6ZmpxajMzZzczNEBeNTQwYF81XjAxYGBgMmFiYSNwZnNncjRnMGNgLS1kMS9zcw%3D%3D&l=20240204092444A90E8B775EB46FF00B30&btag=e00088000',
  },
  {
    animeName: 'OSHI NO KO',
    video: 'https://v16m-default.akamaized.net/4ae0dde3063c25b4ec8f3414a84d53a5/65bfaca9/video/tos/alisg/tos-alisg-pve-0037/oQknQiAyQBeIPA8VQBOEbGBQBgCegObGFQ9nDN/?a=0&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=2334&bt=1167&bti=OUBzOTg7QGo6OjZAL3AjLTAzYCMxNDNg&cs=0&ds=6&ft=XE5bCqT0m7jPD12tXWMR3wUTV3yKMeF~O5&mime_type=video_mp4&qs=4&rc=OWk5Zjs4M2U4PGUzaDVkZEBpanh2PDc6ZjdpbDMzODgzNEAzY2EzLy00XjIxLV5hNjUwYSMzYmszcjQwNS1gLS1kLy1zcw%3D%3D&l=20240204092621A3246BB8086326E74E8E&btag=e00088000',
  },
  {
    animeName: 'MY LOVE STORY WITH YAMADA-KUN AT LV999',
    video: 'https://v16m-default.akamaized.net/ae7d5dc90a20be2f285b03555a1bb4f9/65bfacf3/video/tos/useast2a/tos-useast2a-pve-0068/okB4ARYVfeiD5EqgQkDnJrbQIoIAQIhMBJtrlR/?a=0&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=1422&bt=711&bti=OUBzOTg7QGo6OjZAL3AjLTAzYCMxNDNg&cs=0&ds=6&ft=XE5bCqT0m7jPD12lEWMR3wUTV3yKMeF~O5&mime_type=video_mp4&qs=0&rc=aGhnNjdkO2U5ZWgzNDM7aUBpM2Y2PDc6ZmRkazMzNzczM0BiXl40Ll9hNWIxLzNjYC0yYSMxMmZycjRvMV9gLS1kMTZzcw%3D%3D&l=202402040927254C382843C1169AECACD9&btag=e00088000',
  },
  {
    animeName: 'MY HERO ACADEMIA SEASON 6',
    video: 'https://v16m-default.akamaized.net/2158a5f3e9c8362ea0e5367f9ecc32d2/65bfad9e/video/tos/useast2a/tos-useast2a-pve-0068/o8MDigAiuIY7OIQoBwCxFrEQpRFsBf4Akz2yCK/?a=0&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=4944&bt=2472&bti=OTg7QGo5QHM6OjZALTAzYCMvcCMxNDNg&cs=0&ds=3&ft=XE5bCqT0m7jPD12LpWMR3wUTV3yKMeF~O5&mime_type=video_mp4&qs=0&rc=NjozOTtoZTxlaGRmNGdoNUBpajhsanU5cnA0cDMzNzczM0BgMTYwMzFjXmMxNS8zYzJfYSM1cGUtMmRjXzJgLS1kMTZzcw%3D%3D&l=20240204093025BFAFBDB5615F78E9F33E&btag=e00088000',
  },
  {
    animeName: 'TOMO-CHAN IS A GIRL!',
    video: 'https://v16m-default.akamaized.net/18b419a259d37dbbc929005a87041df7/65bfaded/video/tos/useast2a/tos-useast2a-ve-0068c002/o4A7Al4ZsfXCYCUQIyhzGCNaEjJtomq8gkK2sI/?a=0&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=1670&bt=835&bti=OTg7QGo5QHM6OjZALTAzYCMvcCMxNDNg&cs=0&ds=6&ft=XE5bCqT0m7jPD12nwWMR3wUTV3yKMeF~O5&mime_type=video_mp4&qs=0&rc=MzlnMzxmMzk8NTZoZGRlZ0BpM3JkaTk6ZnU8bTMzNzczM0A2LWItMDNjXzIxYDNjLjFiYSNhbTJgcjQwMzJgLS1kMTZzcw%3D%3D&l=202402040931314FF718EF17EBD8F070DB&btag=e00088000',
  },
  {
    animeName: 'TOKYO REVENGERS',
    video: 'https://v16m-default.akamaized.net/f7f7473f4347644b456963fb30bf5a62/65bfae49/video/tos/useast2a/tos-useast2a-ve-0068c004/okD98d97nIePYOPfAT8gSqrPKCb2JHCQDRgfEH/?a=0&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=3744&bt=1872&bti=OUBzOTg7QGo6OjZAL3AjLTAzYCMxNDNg&cs=0&ds=3&ft=XE5bCqT0m7jPD12pLWMR3wUTV3yKMeF~O5&mime_type=video_mp4&qs=0&rc=O2k5aGkzZWQ3ZDllZjM1O0BpMzh0aTY6Zm1obDMzNzgzM0AvMzQ2Mi5gNi0xYzFeM2AvYSMzZ3NzcjRvczRgLS1kLzZzcw%3D%3D&l=20240204093313B34AA4E2D36E79EDC2D8&btag=e00088000',
  },
  {
    animeName: 'SUMMER TIME RENDERING',
    video: 'https://v16m-default.akamaized.net/a0414201831a7542f3c65dfdc00264c7/65bfaeb0/video/tos/useast2a/tos-useast2a-pve-0068/e7d07d5cc7b84e22b5747d9a79264620/?a=0&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=2264&bt=1132&bti=OUBzOTg7QGo6OjZAL3AjLTAzYCMxNDNg&cs=0&ds=6&ft=XE5bCqT0m7jPD12bnWMR3wUTV3yKMeF~O5&mime_type=video_mp4&qs=0&rc=ODg6aDg3NzRoZzUzZ2Q4OEBpM2s8cjQ6ZjtpZDMzNzgzM0A2YmMxMGFjNS0xNGAzYGJhYSMyYW0tcjQwMGBgLS1kLzZzcw%3D%3D&l=20240204093430B66A06DAC7A143EFDB02&btag=e00088000',
  },
  {
    animeName: 'NIER: AUTOMATA VER. 1.1A',
    video: 'https://v16m-default.akamaized.net/88bffae20d5f68df6f75d6563da03c90/65bfaeec/video/tos/alisg/tos-alisg-pve-0037/oUEzwGp3zUmhCAEDAVfQoNKzcAtWxCAIhEw3Bw/?a=0&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=1354&bt=677&bti=OTg7QGo5QHM6OjZALTAzYCMvcCMxNDNg&cs=0&ds=3&ft=XE5bCqT0m7jPD12LRWMR3wUTV3yKMeF~O5&mime_type=video_mp4&qs=0&rc=ZDM0NDRpZzY7NmhnO2k8OEBpM3Zndzc6ZnNmaDMzODgzNEAyNWNiYzFgNi4xYGEzYGJgYSMuXnJvcjRvMC1gLS1kLy1zcw%3D%3D&l=20240204093546E3D976CBFB2ACDE8043E&btag=e00088000',
  },
  {
    animeName: 'THE FIRE HUNTER',
    video: 'https://v16m-default.akamaized.net/02b8e4b0fa77cede8c7177af333e9f39/65bfaf43/video/tos/useast2a/tos-useast2a-ve-0068c004/o0ntUJCvUBYreID2HbRLEqGBExuzSQdLQdADej/?a=0&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&br=1710&bt=855&bti=OUBzOTg7QGo6OjZAL3AjLTAzYCMxNDNg&cs=0&ds=6&ft=XE5bCqT0m7jPD125~WMR3wUTV3yKMeF~O5&mime_type=video_mp4&qs=0&rc=Njg7NTY5ZWU0ZGlnOzU2ZEBpandzPDY6ZnVsaDMzNzczM0BiLzFfXy8xNl8xLi4uYGBeYSNtZGM0cjRvbGpgLS1kMTZzcw%3D%3D&l=20240204093707FE3E684C5E7C60E77E7A&btag=e00088000',
  },

];


let sentRecommendations = [];


function getRandomAnime() {

  const remainingRecommendations = animeRecommendations.filter(
    (anime) => !sentRecommendations.includes(anime)
  );

  if (remainingRecommendations.length === 0) {

    sentRecommendations = [];
  }


  const randomIndex = Math.floor(Math.random() * remainingRecommendations.length);
  const randomAnime = remainingRecommendations[randomIndex];


  sentRecommendations.push(randomAnime);

  return randomAnime;
}


app.get('/anime', (req, res) => {
  const randomAnime = getRandomAnime();
  res.json(randomAnime);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
