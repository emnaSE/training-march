import * as vscode from 'vscode';
import * as openai from 'openai';

openai.apiKey = 'YOUR_API_KEY';

//Add the ChatGPT analysis functionality
export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand('extension.runMyProject', async () => {
    // Execute your project code here

    // Analyze the project using ChatGPT
    const prompt = 'Analyze my project for errors.';
    const response = await openai.completions.create({
      engine: 'text-davinci-002',
      prompt,
      maxTokens: 1024,
      n: 1,
      stop: '\n',
    });

    // Display the ChatGPT response in a new editor window
    vscode.workspace.openTextDocument({ content: response.choices[0].text }).then(doc => {
      vscode.window.showTextDocument(doc, vscode.ViewColumn.Beside, true);
    });
  });

  context.subscriptions.push(disposable);
}
//Create the user interface
export function activate(context: vscode.ExtensionContext) {
    let statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 100);
    statusBarItem.text = 'Run My Project';
    statusBarItem.command = 'extension.runMyProject';
    statusBarItem.show();
  
    let disposable = vscode.commands.registerCommand('extension.runMyProject', async () => {
  
