install:
	npm ci

brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-ru

lint:
	npx eslint .
