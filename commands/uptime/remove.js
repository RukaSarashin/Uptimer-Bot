const _0x264b16=_0x4455;(function(_0x34abfa,_0x4bacb5){const _0x3a3d29=_0x4455,_0x4da76f=_0x34abfa();while(!![]){try{const _0x4fe1f0=parseInt(_0x3a3d29(0x79))/0x1*(parseInt(_0x3a3d29(0x7c))/0x2)+-parseInt(_0x3a3d29(0x94))/0x3+-parseInt(_0x3a3d29(0xb6))/0x4*(-parseInt(_0x3a3d29(0xad))/0x5)+-parseInt(_0x3a3d29(0x8e))/0x6*(parseInt(_0x3a3d29(0x8b))/0x7)+parseInt(_0x3a3d29(0x86))/0x8*(parseInt(_0x3a3d29(0x76))/0x9)+parseInt(_0x3a3d29(0x77))/0xa+parseInt(_0x3a3d29(0x7a))/0xb;if(_0x4fe1f0===_0x4bacb5)break;else _0x4da76f['push'](_0x4da76f['shift']());}catch(_0xa7f7fc){_0x4da76f['push'](_0x4da76f['shift']());}}}(_0x3fe9,0x861db));const UrlsConfig=require(_0x264b16(0x90)),{MessageEmbed,Client,Message}=require('discord.js'),validUrl=require(_0x264b16(0x8a));module[_0x264b16(0xa1)]={'name':_0x264b16(0xab),'description':'Removes\x20monitor\x20from\x20your\x20project.','aliases':['dehost'],'category':_0x264b16(0xa6),'botPermission':[],'authorPermission':[],'ownerOnly':![],'run':async(_0x3eb323,_0x6ec94e,_0x1250ea)=>{const _0x23fdea=_0x264b16,_0x1aaff4=_0x1250ea[0x0];if(!_0x1aaff4){const _0x48e736={'authorID':_0x6ec94e['author']['id']},_0x301ab9=await UrlsConfig[_0x23fdea(0xa2)](_0x48e736);if(_0x301ab9[_0x23fdea(0xa9)]===0x0)return _0x6ec94e[_0x23fdea(0x9a)](_0x23fdea(0xa8)+default_prefix+'add\x20[project\x20Url]');let _0x52d4e0=new MessageEmbed()[_0x23fdea(0x80)](_0x23fdea(0x98))[_0x23fdea(0x7f)](_0x23fdea(0xb1)),_0x4b2f6d=_0x301ab9[_0x23fdea(0xa9)];const _0x43ebb3=sliceIntoChunks(_0x301ab9,0x5);let _0x5c5e28=0x0,_0x220111=0x0;const _0x19fed0=new Map();let _0x16fe7a=[],_0xfa50ab=0x0;_0x43ebb3[_0xfa50ab][_0x23fdea(0x99)](_0xa5b7a=>{const _0x12b43f=_0x23fdea;_0x5c5e28++,_0x16fe7a[_0x12b43f(0x89)]('**'+_0x5c5e28+_0x12b43f(0x81)+_0xa5b7a[_0x12b43f(0x96)]+'`'),_0x19fed0[_0x12b43f(0xa3)](_0x5c5e28,_0xa5b7a[_0x12b43f(0x96)]);}),_0x52d4e0[_0x23fdea(0x93)](_0x16fe7a[_0x23fdea(0xb5)]('\x0a'));const _0x527093=[{'emoji':'◀','action':_0x23fdea(0xa0)},{'emoji':_0x23fdea(0xb4),'number':0x1},{'emoji':'2️⃣','number':0x2},{'emoji':_0x23fdea(0xb0),'number':0x3},{'emoji':_0x23fdea(0xae),'number':0x4},{'emoji':_0x23fdea(0x8c),'number':0x5},{'emoji':'▶','action':'next'}];let _0x41d8b3=![];const _0x19fab3=await _0x6ec94e['author'][_0x23fdea(0xac)](_0x52d4e0)[_0x23fdea(0x7e)](_0x1b2449=>{const _0x5e176c=_0x23fdea;_0x41d8b3=!![];if(_0x1b2449['message']===_0x5e176c(0xaf))_0x6ec94e[_0x5e176c(0x9d)][_0x5e176c(0xac)]('Error:\x20`Cannot\x20send\x20message\x20to\x20you.\x20please\x20turn\x20on\x20your\x20Dms`.');});if(_0x41d8b3)return;_0x6ec94e['channel'][_0x23fdea(0xac)](_0x23fdea(0x9e)),_0x527093[_0x23fdea(0x99)](async _0x2948a9=>await _0x19fab3[_0x23fdea(0x88)](_0x2948a9[_0x23fdea(0xb2)]));const _0x40ba3e=(_0x3e48a5,_0x17eaf8)=>_0x527093[_0x23fdea(0xa2)](_0x452db9=>_0x452db9[_0x23fdea(0xb2)]===_0x3e48a5['emoji'][_0x23fdea(0x8f)])&&_0x17eaf8['id']===_0x6ec94e[_0x23fdea(0x8d)]['id'],_0x43f1c3=_0x19fab3['createReactionCollector'](_0x40ba3e,{'time':0x249f0});_0x43f1c3['on'](_0x23fdea(0x91),async _0x359081=>{const _0x38d5e0=_0x23fdea;switch(_0x359081['emoji'][_0x38d5e0(0x8f)]){case _0x38d5e0(0xb4):{await UrlsConfig[_0x38d5e0(0x9f)]({'projectURL':_0x19fed0['get'](0x1)});let _0x1fbecf=new MessageEmbed()[_0x38d5e0(0x7f)](_0x38d5e0(0xa5))['setDescription'](_0x38d5e0(0x82))[_0x38d5e0(0x80)](_0x38d5e0(0x98))[_0x38d5e0(0xa4)]();await _0x6ec94e['author'][_0x38d5e0(0xac)](_0x1fbecf),_0x43f1c3['stop']();break;}case'2️⃣':{await UrlsConfig[_0x38d5e0(0x9f)]({'projectURL':_0x19fed0[_0x38d5e0(0xa7)](0x2)});let _0x110f47=new MessageEmbed()[_0x38d5e0(0x7f)]('✅\x20Removed\x20Succesfully!')[_0x38d5e0(0x93)]('Thanks\x20for\x20using\x20me')[_0x38d5e0(0x80)](_0x38d5e0(0x98))[_0x38d5e0(0xa4)]();await _0x6ec94e[_0x38d5e0(0x8d)][_0x38d5e0(0xac)](_0x110f47),_0x43f1c3[_0x38d5e0(0x92)]();break;}case _0x38d5e0(0xb0):{await UrlsConfig['findOneAndDelete']({'projectURL':_0x19fed0[_0x38d5e0(0xa7)](0x3)});let _0x5b523d=new MessageEmbed()['setTitle'](_0x38d5e0(0xa5))[_0x38d5e0(0x93)]('Thanks\x20for\x20using\x20me')[_0x38d5e0(0x80)](_0x38d5e0(0x98))[_0x38d5e0(0xa4)]();await _0x6ec94e['author']['send'](_0x5b523d),_0x43f1c3[_0x38d5e0(0x92)]();break;}case _0x38d5e0(0xae):{await UrlsConfig[_0x38d5e0(0x9f)]({'projectURL':_0x19fed0[_0x38d5e0(0xa7)](0x4)});let _0x2d5236=new MessageEmbed()['setTitle']('✅\x20Removed\x20Succesfully!')[_0x38d5e0(0x93)](_0x38d5e0(0x82))[_0x38d5e0(0x80)](_0x38d5e0(0x98))['setTimestamp']();await _0x6ec94e[_0x38d5e0(0x8d)][_0x38d5e0(0xac)](_0x2d5236),_0x43f1c3[_0x38d5e0(0x92)]();break;}case _0x38d5e0(0x8c):{await UrlsConfig[_0x38d5e0(0x9f)]({'projectURL':_0x19fed0[_0x38d5e0(0xa7)](0x5)});let _0x440e4b=new MessageEmbed()[_0x38d5e0(0x7f)](_0x38d5e0(0xa5))[_0x38d5e0(0x93)](_0x38d5e0(0x82))[_0x38d5e0(0x80)](_0x38d5e0(0x98))[_0x38d5e0(0xa4)]();await _0x6ec94e['author'][_0x38d5e0(0xac)](_0x440e4b),_0x43f1c3[_0x38d5e0(0x92)]();break;}case'◀':{if(_0xfa50ab!==0x0){_0xfa50ab=_0xfa50ab-0x1;if(!_0x43ebb3[_0xfa50ab])break;_0x5c5e28=0x0,_0x16fe7a=[],_0x19fed0[_0x38d5e0(0x97)](),_0x43ebb3[_0xfa50ab][_0x38d5e0(0x99)](_0x74dccf=>{const _0x275efd=_0x38d5e0;_0x5c5e28++,_0x16fe7a['push']('**'+_0x5c5e28+_0x275efd(0x81)+_0x74dccf[_0x275efd(0x96)]+'`'),_0x19fed0[_0x275efd(0xa3)](_0x5c5e28,_0x74dccf[_0x275efd(0x96)]);}),_0x52d4e0[_0x38d5e0(0x93)](_0x16fe7a[_0x38d5e0(0xb5)]('\x0a')),await _0x19fab3[_0x38d5e0(0xb3)](_0x52d4e0);break;}break;}case'▶':{if(_0xfa50ab!==_0x301ab9[_0x38d5e0(0xa9)]){_0xfa50ab=_0xfa50ab+0x1;if(!_0x43ebb3[_0xfa50ab])break;_0x5c5e28=0x0,_0x16fe7a=[],_0x19fed0['clear'](),_0x43ebb3[_0xfa50ab][_0x38d5e0(0x99)](_0x394e62=>{const _0x5e5dec=_0x38d5e0;_0x5c5e28++,_0x16fe7a[_0x5e5dec(0x89)]('**'+_0x5c5e28+_0x5e5dec(0x81)+_0x394e62['projectURL']+'`'),_0x19fed0[_0x5e5dec(0xa3)](_0x5c5e28,_0x394e62[_0x5e5dec(0x96)]);}),_0x52d4e0[_0x38d5e0(0x93)](_0x16fe7a['join']('\x0a')),await _0x19fab3[_0x38d5e0(0xb3)](_0x52d4e0);break;}break;}default:break;}});return;}if(!validUrl[_0x23fdea(0x78)](_0x1aaff4))return _0x6ec94e[_0x23fdea(0x9d)][_0x23fdea(0xac)](_0x23fdea(0x87));let _0x5ccf3e=new MessageEmbed()[_0x23fdea(0x93)](_0x23fdea(0x7b));var _0x3fcc91=await _0x6ec94e['channel'][_0x23fdea(0xac)](_0x6ec94e[_0x23fdea(0x8d)],_0x5ccf3e),_0x4137ef=await UrlsConfig[_0x23fdea(0x83)]({'projectURL':_0x1aaff4,'authorID':_0x6ec94e[_0x23fdea(0x8d)]['id']});if(_0x4137ef===null){let _0x593a68=new MessageEmbed()[_0x23fdea(0x7f)](_0x23fdea(0x9c))[_0x23fdea(0x93)]('Add\x20one\x20using:\x20`,add\x20<url>`')[_0x23fdea(0x80)](_0x23fdea(0x85))[_0x23fdea(0xa4)]();return await _0x3fcc91[_0x23fdea(0xb3)](_0x593a68),_0x6ec94e[_0x23fdea(0xaa)]();}else var _0x2cb77f=await UrlsConfig[_0x23fdea(0x9f)]({'projectURL':_0x1aaff4})[_0x23fdea(0x84)](async()=>{const _0x5daaa3=_0x23fdea;let _0x5db853=await _0x3eb323[_0x5daaa3(0x7d)][_0x5daaa3(0x95)](_0x1a2aca=>_0x1a2aca!==_0x1aaff4);_0x3eb323['projects']=_0x5db853;let _0x3602cd=new MessageEmbed()[_0x5daaa3(0x7f)](_0x5daaa3(0xa5))[_0x5daaa3(0x93)](_0x5daaa3(0x82))['setColor'](_0x5daaa3(0x98))['setTimestamp']();return await _0x3fcc91[_0x5daaa3(0xb3)](_0x3602cd),_0x6ec94e[_0x5daaa3(0xaa)]();});}};function _0x4455(_0xf8d19c,_0x2dca25){const _0x3fe917=_0x3fe9();return _0x4455=function(_0x445525,_0x1367e7){_0x445525=_0x445525-0x76;let _0x224c6d=_0x3fe917[_0x445525];return _0x224c6d;},_0x4455(_0xf8d19c,_0x2dca25);}function sliceIntoChunks(_0x8d6f4d,_0x45268a){const _0x574322=_0x264b16,_0x250957=[];for(let _0x28c140=0x0;_0x28c140<_0x8d6f4d[_0x574322(0xa9)];_0x28c140+=_0x45268a){const _0x3198ae=_0x8d6f4d[_0x574322(0x9b)](_0x28c140,_0x28c140+_0x45268a);_0x250957[_0x574322(0x89)](_0x3198ae);}return _0x250957;}function _0x3fe9(){const _0x40edb3=['3️⃣','Select\x20what\x20project\x20you\x20wanna\x20remove.','emoji','edit','1️⃣','join','4dMfpAy','569358QhKUXw','3947130ApNBhE','isUri','61gZeuJU','10971301odYdnj','Please\x20wait...','4610fWzDQy','projects','catch','setTitle','setColor','**.\x20`','Thanks\x20for\x20using\x20me','findOne','then','#FF0000','32xpjBMo','Please\x20provide\x20a\x20vaild\x20url!','react','push','valid-url','7iDFuQP','5️⃣','author','3464310WpDXCj','name','./../../database/models/UrlsConfig','collect','stop','setDescription','2424837xMpkvQ','filter','projectURL','clear','RANDOM','forEach','reply','slice','Project\x20is\x20not\x20Registered!','channel','📥\x20Check\x20your\x20DM.','findOneAndDelete','back','exports','find','set','setTimestamp','✅\x20Removed\x20Succesfully!','uptime','get','*You\x20don\x27t\x20have\x20any\x20projects\x20Added.*\x0aAdd\x20one\x20by\x20using:\x20','length','delete','remove','send','746230bVPaNe','4️⃣','Cannot\x20send\x20messages\x20to\x20this\x20user'];_0x3fe9=function(){return _0x40edb3;};return _0x3fe9();}