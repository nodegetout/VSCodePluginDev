import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	console.log('VSCode Plugin Dev environment is now active!');

	const disposable = vscode.commands.registerCommand('vscodeplugindev.helloWorld', () => {
		vscode.window.showInformationMessage('Hello from VSCode Plugin Dev!');
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
