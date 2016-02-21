exports.optMap = {
  '--anyauth': 'ANY',
  '-a': 'APPEND',
  '--append': 'APPEND',
  '--basic': 'BASIC',
  '--capath': 'CAPATH',
  '-E': 'SSLCERT',
  '--cert': 'SSLCERT',
  '--cert-status': 'SSL_VERIFYSTATUS',
  '--cert-type': 'SSLCERTTYPE',
  '--ciphers': 'SSL_CIPHER_LIST',
  '--compressed': '', // TODO
  '-K': '', // TODO
  '--config': '', // TODO
  '--connect-timeout': 'CONNECTTIMEOUT',
  '-C': '', // TODO
  '--continue-at': '', // TODO
  '-b': 'COOKIE', // TODO: branch for COOKIEFILE
  '--cookie': 'COOKIE', // TODO: branch for COOKIEFILE
  '-c': 'COOKIEJAR',
  '--cookie-jar': 'COOKIEJAR',
  '--create-dirs': '', // TODO
  '--crlf': 'CRLF',
  '--crlfile': 'CRLFILE',
  '-d': 'POST',
  '--data': 'POST',
  '--data-raw': '', // TODO
  '--data-ascii': '', // TODO
  '--data-binary': '', // TODO
  '--data-urlencode': '', // TODO
  '--delegation': '', // TODO
  '--digest': 'DIGEST',
  '--disable-eprt': 'FTP_USE_EPRT',
  '--disable-epsv': 'FTP_USE_EPSV',
  '--dns-servers': 'DNS_SERVERS',
  '--dns-interface': 'DNS_INTERFACE',
  '--dns-ipv4-addr': 'DNS_LOCAL_IP4',
  '--dns-ipv6-addr': 'DNS_LOCAL_IP6',
  '-D': '', // TODO
  '--dump-header': '', // TODO
  '--egd-file': 'EGDSOCKET',
  '--engine': 'SSLENGINE',
  '-f': '', // TODO
  '--fail': '', // TODO
  '--false-start': '', // TODO
  '-F': 'CONTENTS',
  '--form': 'CONTENTS',
  '-G': '', // TODO
  '--get': '', // TODO
  '-g': '', // TODO
  '--globoff': '', // TODO
  '-H': 'HEADER',
  '--header': 'HEADER',
  '-I': '', // TODO
  '--head': '', // TODO
  '-k': '', // TODO
  '--insecure': '', // TODO
  '--no-proxy': 'NOPROXY',
  '--oauth2-bearer': 'XOAUTH2_BEARER',
  '--pass': 'KEYPASSWD',
  '-X': 'CUSTOMREQUEST',
  '--request': 'CUSTOMREQUEST',
  '-v': 'VERBOSE',
  '--verbose': 'VERBOSE',
  '-u': 'USERPWD	',
  '--user': 'USERPWD',
  '-L': 'FOLLOWLOCATION',
  '--location': 'FOLLOWLOCATION',
}

exports.curlBoolMapList = [
  'ANY',
  'APPEND',
  'BASIC',
  'CRLF',
  'SSL_VERIFYSTATUS',
  'DIGEST',
  'FTP_USE_EPRT',
  'FTP_USE_EPSVLF',
  'DNS_SERVERS', // TODO: likely needs to pass false
  'DNS_LOCAL_IP4',
  'DNS_LOCAL_IP6',
  'NOPROXY',
  'VERBOSE',
  'FOLLOWLOCATION'
]
