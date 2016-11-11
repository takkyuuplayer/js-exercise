.PHONY: test

setup:
	npm install

test:
	npm run test

upgrade:
	yarn install
	yarn outdated | awk 'NR>2{print $0}' | tac | awk 'NR>1{print $1}' | xargs -n 1 yarn upgrade

lint:
	$(shell npm bin)/eslint test
