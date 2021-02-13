DOCKER_IMAGE=cyber-coin-contraption-buyer

build:
	docker build -t $(DOCKER_IMAGE) .
.PHONY: build

run: build
	docker run \
		-e BUYER_CB_API_KEY \
		-e BUYER_CB_API_SECRET \
		-e BUYER_CB_USE_SANDBOX \
		-e BUYER_CB_PASSPHRASE \
		-it $(DOCKER_IMAGE) \
		npm start
.PHONY: run
