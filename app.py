from flask import Flask, render_template, request
import language_tool_python

app = Flask(__name__)
tool = language_tool_python.LanguageTool('en-US')

@app.route("/", methods=["GET", "POST"])
def index():
    corrected_text = ""
    input_text = ""
    if request.method == "POST":
        input_text = request.form["text"]
        matches = tool.check(input_text)
        corrected_text = language_tool_python.utils.correct(input_text, matches)
    return render_template("index.html", corrected=corrected_text, original=input_text)

if __name__ == "__main__":
    app.run(debug=True)
