var shell = require('shelljs');

shell.echo(shell.pwd())
shell.echo(process.cwd())
shell.echo(__filename)
shell.echo(__dirname)
