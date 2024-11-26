publish: 
	npm publish --dry-run
start: 
	node ./bin/brain-games.js
install: 
	npm ci
lint:
	npx eslint .