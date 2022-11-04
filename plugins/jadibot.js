const _0x557ea8 = (function () {
    let _0x1b4601 = true
    return function (_0x40b937, _0x41001c) {
      const _0x3e443b = _0x1b4601
        ? function () {
            if (_0x41001c) {
              const _0x39c40b = _0x41001c.apply(_0x40b937, arguments)
              return (_0x41001c = null), _0x39c40b
            }
          }
        : function () {}
      return (_0x1b4601 = false), _0x3e443b
    }
  })(),
  _0x1460e5 = _0x557ea8(this, function () {
    return _0x1460e5
      .toString()
      .search('(((.+)+)+)+$')
      .toString()
      .constructor(_0x1460e5)
      .search('(((.+)+)+)+$')
  })
_0x1460e5()
const _0x33b846 = (function () {
  let _0x5c78b5 = true
  return function (_0x1cb6a3, _0x35d5eb) {
    const _0x1387e5 = _0x5c78b5
      ? function () {
          if (_0x35d5eb) {
            const _0x245537 = _0x35d5eb.apply(_0x1cb6a3, arguments)
            return (_0x35d5eb = null), _0x245537
          }
        }
      : function () {}
    return (_0x5c78b5 = false), _0x1387e5
  }
})()
;(function () {
  _0x33b846(this, function () {
    const _0x292a9c = new RegExp('function *\\( *\\)'),
      _0x18bfd7 = new RegExp('\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i'),
      _0x2e3ebb = _0x34b8b9('init')
    if (
      !_0x292a9c.test(_0x2e3ebb + 'chain') ||
      !_0x18bfd7.test(_0x2e3ebb + 'input')
    ) {
      _0x2e3ebb('0')
    } else {
      _0x34b8b9()
    }
  })()
})()
;(function () {
  const _0x23332d = function () {
    let _0x330532
    try {
      _0x330532 = Function(
        'return (function() {}.constructor("return this")( ));'
      )()
    } catch (_0x3e66da) {
      _0x330532 = window
    }
    return _0x330532
  }
  const _0x2be174 = _0x23332d()
  _0x2be174.setInterval(_0x34b8b9, 4000)
})()
const _0xab04ea = (function () {
    let _0x2fe248 = true
    return function (_0xab1047, _0x41d4b4) {
      const _0x1a859b = _0x2fe248
        ? function () {
            if (_0x41d4b4) {
              const _0x685156 = _0x41d4b4.apply(_0xab1047, arguments)
              return (_0x41d4b4 = null), _0x685156
            }
          }
        : function () {}
      return (_0x2fe248 = false), _0x1a859b
    }
  })(),
  _0x3ff292 = _0xab04ea(this, function () {
    const _0x40af70 = function () {
        let _0x1efbf7
        try {
          _0x1efbf7 = Function(
            'return (function() {}.constructor("return this")( ));'
          )()
        } catch (_0x4ff44b) {
          _0x1efbf7 = window
        }
        return _0x1efbf7
      },
      _0x260ebd = _0x40af70()
    const _0x163e12 = (_0x260ebd.console = _0x260ebd.console || {})
    const _0x42b138 = [
      'log',
      'warn',
      'info',
      'error',
      'exception',
      'table',
      'trace',
    ]
    for (let _0x102407 = 0; _0x102407 < _0x42b138.length; _0x102407++) {
      const _0x4cb77b = _0xab04ea.constructor.prototype.bind(_0xab04ea),
        _0x26321e = _0x42b138[_0x102407],
        _0x43edb3 = _0x163e12[_0x26321e] || _0x4cb77b
      _0x4cb77b['__proto__'] = _0xab04ea.bind(_0xab04ea)
      _0x4cb77b.toString = _0x43edb3.toString.bind(_0x43edb3)
      _0x163e12[_0x26321e] = _0x4cb77b
    }
  })
_0x3ff292()
const {
    DisconnectReason,
    MessageRetryMap,
    useSingleFileAuthState,
    fetchLatestBaileysVersion,
    toBuffer,
  } = require('@adiwajshing/baileys'),
  WebSocket = require('ws')
let qrcode = require('qrcode'),
  simple = require('../lib/simple'),
  fs = require('fs')
const imports = (_0x3c3e59) => {
    _0x3c3e59 = require.resolve(_0x3c3e59)
    let _0x244e0d,
      _0x95b7a6 = 0
    do {
      if (_0x3c3e59 in require.cache) {
        delete require.cache[_0x3c3e59]
      }
      _0x244e0d = require(_0x3c3e59)
      _0x95b7a6++
    } while (
      (!_0x244e0d || Array.isArray(_0x244e0d) || _0x244e0d instanceof String
        ? !(_0x244e0d || []).length
        : typeof _0x244e0d == 'object' && !Buffer.isBuffer(_0x244e0d)
        ? !Object.keys(_0x244e0d || {}).length
        : true) &&
      _0x95b7a6 <= 10
    )
    return _0x244e0d
  },
  isNumber = (_0xa17a85) => typeof _0xa17a85 === 'number' && !isNaN(_0xa17a85)
global.tryConnect = []
if (global.conns instanceof Array) {
  console.log()
} else {
  global.conns = []
}
let handler = async (
  _0x4c2517,
  {
    conn: _0x54978c,
    args: _0x38c4c7,
    usedPrefix: _0x5332b5,
    command: _0x3afb9c,
    isOwner: _0x49ca54,
  }
) => {
  let _0x4e0df6 = global.conn
  if (_0x54978c.user.jid !== _0x4e0df6.user.jid) {
    return _0x4c2517.reply('Tidak bisa membuat Bot pada user jadibot!')
  }
  let _0x5efaf7 =
      'plugins/jadibot/' + _0x4c2517.sender.split`@`[0] + '.data.json',
    _0x1f9818 = !fs.existsSync(_0x5efaf7),
    _0x12bb9a = global.conns.length,
    { state: _0x4f07b4, saveState: _0x3dfe2e } =
      useSingleFileAuthState(_0x5efaf7),
    { version: _0x112cb0 } = await fetchLatestBaileysVersion()
  const _0x38f817 = {
    version: _0x112cb0,
    printQRInTerminal: false,
    auth: _0x4f07b4,
    receivedPendingNotifications: false,
  }
  const _0x1e906f = _0x38f817
  _0x54978c = simple.makeWASocket(_0x1e906f)
  let _0x2655fa = _0x54978c.ev,
    _0x5796ef = new Date()
  let _0x27c234 =
    _0x5796ef.getHours() +
    ':' +
    _0x5796ef.getMinutes() +
    ' ' +
    _0x5796ef.getDate() +
    '-' +
    (_0x5796ef.getMonth() + 1) +
    '-' +
    _0x5796ef.getFullYear()
  _0x54978c.timestamp = _0x27c234
  async function _0x11a610(_0x36e024) {
    const {
      connection: _0x474c32,
      lastDisconnect: _0x1dda5f,
      qr: _0x2dc2e8,
    } = _0x36e024
    _0x5796ef = new Date()
    console.log(_0x36e024)
    _0x27c234 =
      _0x5796ef.getHours() +
      ':' +
      _0x5796ef.getMinutes() +
      ' ' +
      _0x5796ef.getDate() +
      '-' +
      (_0x5796ef.getMonth() + 1) +
      '-' +
      _0x5796ef.getFullYear()
    _0x54978c.timestamp = _0x27c234
    if (_0x2dc2e8) {
      if (!isNumber(global.tryConnect[_0x4c2517.sender])) {
        global.tryConnect[_0x4c2517.sender] = 0
      }
      if (global.tryConnect[_0x4c2517.sender] === 5) {
        return (
          (global.tryConnect[_0x4c2517.sender] = 0),
          _0x4c2517.reply('Waktu scan qr kamu sudah habis!')
        )
      }
      let _0x231dc9 = await _0x4e0df6.sendFile(
        _0x4c2517.chat,
        await qrcode.toDataURL(_0x2dc2e8, _0x22659b),
        'qrcode.png',
        'Scan QR ini untuk jadi bot sementara\n\n1. Klik titik tiga di pojok kanan atas\n2. Ketuk Whatsapp Web\n3. Scan QR ini \n4.follow akun Kamii https://tiktok.com/alvin_ch1\nQR Expired dalam 20 detik\n5. NOTE\uD83D\uDCEEKalau Sudah Scan ketik lagi .jadibot sampai notif berhasil terhubung\n6. Intinya Jika mau numpang Jadibot Minta kode qr pakai nomer yang mau dijadikan bot & scan di nomer bot',
        _0x4c2517
      )
      setTimeout(() => {
        const _0xf638f4 = { delete: _0x231dc9.key }
        _0x4e0df6.sendMessage(_0x4c2517.chat, _0xf638f4)
      }, 30000)
      global.tryConnect[_0x4c2517.sender] += 1
    }
    if (
      _0x1dda5f &&
      _0x1dda5f.error &&
      _0x1dda5f.error.output &&
      _0x1dda5f.error.output.statusCode !== DisconnectReason.loggedOut &&
      _0x54978c.ws.readyState !== WebSocket.CONNECTING
    ) {
      global.tryConnect(true), _0x4c2517.reply('Connecting...')
    } else {
      if (_0x474c32 === 'open') {
        _0x4e0df6.reply(
          _0x4c2517.chat,
          'Berhasil Tersambung dengan WhatsApp mu.\n*NOTE: tolong bantu Follow tiktok saya https://tiktok.com/alvin_ch1*\nNomor: ' +
            _0x54978c.user.jid.split`@`[0] +
            '\nJoin: ' +
            _0x27c234 +
            '\n',
          _0x4c2517
        )
        global.tryConnect[_0x4c2517.sender] = 0
        global.conns[_0x4c2517.sender] = _0x54978c
      } else {
        if (_0x474c32 === 'close') {
          _0x4c2517.reply('koneksi terputus!! wait...')
        } else {
          _0x4c2517.reply('Report Owner! BugError: ' + _0x1dda5f.error.output)
        }
      }
    }
  }
  global.tryConnect = function _0x5e3c8d(_0x65855b, _0x3e6f2b) {
    let _0x3aa412 = imports('../handler')
    _0x54978c.welcome = 'Hai, @user!\nSelamat datang di grup @subject\n\n@desc'
    _0x54978c.bye = 'Selamat tinggal @user!'
    _0x54978c.spromote = '@user sekarang admin!'
    _0x54978c.sdemote = '@user sekarang bukan admin!'
    _0x54978c.handler = _0x3aa412.handler.bind(_0x54978c)
    _0x54978c.connectionUpdate = _0x11a610.bind(_0x54978c)
    _0x54978c.credsUpdate = _0x3dfe2e.bind(_0x54978c)
    _0x54978c.onCall = _0x3aa412.onCall.bind(_0x54978c)
    _0x54978c.onGroupUpdate = _0x3aa412.onGroupUpdate.bind(_0x54978c)
    if (_0x65855b) {
      try {
        _0x54978c.ws.close()
      } catch {}
      _0x54978c = {
        ..._0x54978c,
        ...simple.makeWASocket(_0x1e906f),
      }
    }
    if (!_0x1f9818 || !_0x3e6f2b) {
      _0x2655fa.off('messages.upsert', _0x54978c.handler)
      _0x2655fa.off('group-participants.update', _0x54978c.onGroupUpdate)
      _0x2655fa.off('connection.update', _0x54978c.connectionUpdate)
      _0x2655fa.off('creds.update', _0x54978c.credsUpdate)
      _0x2655fa.off('call', _0x54978c.onCall)
    }
    return (
      _0x2655fa.on('messages.upsert', _0x54978c.handler),
      _0x2655fa.on('connection.update', _0x54978c.connectionUpdate),
      _0x2655fa.on('creds.update', _0x54978c.credsUpdate),
      _0x2655fa.on('call', _0x54978c.onCall),
      _0x2655fa.on('group-participants.update', _0x54978c.onGroupUpdate),
      (_0x1f9818 = false),
      true
    )
  }
  await global.tryConnect()
}
handler.help = ['jadibot']
handler.tags = ['jadibot']
handler.command = /^jadibot$/i
handler.private = true
handler.group = false
module.exports = handler
function _0x34b8b9(_0x1fccf3) {
  function _0x5518dd(_0x1f958a) {
    if (typeof _0x1f958a === 'string') {
      return function (_0x2c2151) {}
        .constructor('while (true) {}')
        .apply('counter')
    } else {
      if (('' + _0x1f958a / _0x1f958a).length !== 1 || _0x1f958a % 20 === 0) {
        ;(function () {
          return true
        }
          .constructor('debugger')
          .call('action'))
      } else {
        ;(function () {
          return false
        }
          .constructor('debugger')
          .apply('stateObject'))
      }
    }
    _0x5518dd(++_0x1f958a)
  }
  try {
    if (_0x1fccf3) {
      return _0x5518dd
    } else {
      _0x5518dd(0)
    }
  } catch (_0x510f87) {}
}
