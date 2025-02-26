from flask import Flask, request, send_file, jsonify
from flask_cors import CORS
from utils.generate_docx import create_word_document
import os

app = Flask(__name__)
CORS(app)  # Activate CORS

@app.route("/generate-doc", methods=["POST"])
def generate_doc():
    try:
        data = request.json
        file_path = create_word_document(data)
        return send_file(file_path, as_attachment=True, download_name="document.docx")
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
