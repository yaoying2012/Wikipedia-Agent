from flask import Flask, request, jsonify, render_template, Response
import flask_cors
import requests

app = Flask(__name__)
flask_cors.CORS(app)


@app.route('/')
def search():
    return render_template('search.html')


@app.route('/wiki_article')
def get_wiki_article():
    # 替换为你想要获取的维基百科页面的标题
    query = request.args.get('query')
    page_title = query
    # 组装维基百科API的URL
    api_url = f'https://en.wikipedia.org/api/rest_v1/page/html/{page_title}'

    try:
        # 发送GET请求获取页面内容
        response = requests.get(api_url)
        # 如果请求成功，返回页面内容
        if response.status_code == 200:
            return response.content
        elif response.status_code == 404:
            return '维基百科中没有这个词条', 404
        else:
            # 如果请求失败，返回错误信息
            return jsonify({'error': 'Failed to fetch Wikipedia article', 'error_type': response.status_code}), 500
    except Exception as e:
        # 发生异常时返回错误信息
        return jsonify({'error': str(e)}), 500


@app.route('/wiki/<search>')
def get_wiki(search):
    return render_template('result.html', search=search)


@app.route('/external_file/<path:my_path>')
def external_file(my_path):
    my_path = 'https://' + my_path
    response = requests.get(my_path)
    content_type = response.headers['Content-Type']
    return Response(response.content, mimetype=content_type)
