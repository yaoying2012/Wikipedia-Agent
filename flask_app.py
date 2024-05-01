from flask import Flask, request, jsonify, render_template, Response, send_from_directory
import flask_cors
import requests
import os

app = Flask(__name__)
flask_cors.CORS(app)

working_path = os.path.split(os.path.abspath(__file__))[0]


def full_path(file):
    return '/'.join([working_path, file])


static_folder_path = full_path('static_files')
app.config['UPLOAD_FOLDER'] = static_folder_path


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


@app.route('/wiki/<entries>')
def get_wiki(entries):
    return render_template('result.html', search=entries)


@app.route('/static_files/<filename>')
def get_image(filename):
    return send_from_directory(app.config['UPLOAD_FOLDER'], filename)
