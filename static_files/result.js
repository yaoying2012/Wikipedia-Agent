// 为搜索结果列表添加点击事件监听器
document.getElementById('wikiResults').addEventListener('click', function(event) {
    // 判断点击元素是否为链接（<a>标签）
    let url;
    if (event.target.tagName === 'A') {
        // 阻止浏览器默认的链接跳转行为
        event.preventDefault();

        // 获取点击的链接URL
        url = event.target.href;

        // 使用正则表达式提取URL中的有效部分
        let pattern = /^(?:https?:\/\/)?(?:www\.)?[^\/]+(?:\/[^\/]*)*\/([^\/]+)$/;
        let result = url.replace(pattern, '$1');

        if (result !== null) {
            url = result; // 使用提取的结果作为新的URL

            // 发送请求到指定服务器
            fetch('https://infopedia.pythonanywhere.com/wiki/' + encodeURIComponent(url))
                .then(response => {
                    // 检查响应状态码
                    if (response.ok) {
                        // 响应成功时，在当前页面打开链接地址
                        window.location.href = response.url;
                    } else {
                        // 响应失败时，输出错误信息
                        console.error('Failed to fetch:', response.statusText);
                    }
                })
                .catch(error => {
                    // 处理请求错误
                    console.error('An error occurred:', error);
                });
        } else {
            console.warn('No match found for URL:', url);
        }
    }
});

// 获取维基百科搜索结果并显示在页面上
let wikiTitle = document.getElementById('wikiTitle').innerHTML;
fetch('https://infopedia.pythonanywhere.com/wiki_article?query=' + wikiTitle)
    .then(response => response.text())
    .then(data => {
        // 检查并过滤返回的HTML内容，移除外部文件链接
        const filteredData = removeExternalFileLinks(data);

        // 显示过滤后的HTML内容
        document.getElementById('wikiResults').innerHTML = filteredData;
    })
    .catch(error => {
        // 处理获取搜索结果时发生的错误
        console.error('An error occurred:', error);
    });

// 函数：移除HTML内容中的外部文件链接
function removeExternalFileLinks(html) {
    // 使用DOMParser解析HTML字符串为文档对象
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');

    // 定义需要处理的标签及其属性
    const tagsAndAttributes = [
        { tag: 'img', attribute: 'src' },
        { tag: 'link', attribute: 'href', relFilter: 'stylesheet' }, // 只处理rel="stylesheet"的<link>标签
        { tag: 'script', attribute: 'src' },
        { tag: 'iframe', attribute: 'src' },
        // 可根据需要添加更多标签和属性
    ];

    // 遍历需要处理的标签和属性，移除符合外部文件链接条件的元素
    tagsAndAttributes.forEach(({ tag, attribute, relFilter }) => {
        const elements = doc.getElementsByTagName(tag);
        for (let i = elements.length - 1; i >= 0; i--) {
            const element = elements[i];
            const attrValue = element.getAttribute(attribute);
            if (attrValue) {
                console.log(element.outerHTML);

                if (relFilter) {
                    if (element.getAttribute('rel') === relFilter) {
                        element.remove();
                    }
                } else {
                    element.remove();
                }
            }
        }
    });

    // 返回处理后的HTML字符串（仅包含文档body部分）
    return doc.body.innerHTML;
}