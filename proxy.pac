function FindProxyForURL(url, host) {
    // Proxy server address and port
    var proxy = "PROXY 3.9.181.83:3128";
    // List of URLs that should be accessed through the proxy
    var proxyURLs = ["www.google.com", "example.org"];
    // Check if the URL matches any of the proxyURLs
    for (var i = 0; i < proxyURLs.length; i++) {
        if (shExpMatch(url, "*" + proxyURLs[i] + "*")) {
            return proxy;
        }
    }
    // Default to direct connection
    return "DIRECT";
}
