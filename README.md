# Github-client

Client for [Github API v3](https://developer.github.com/v3).

## Installation

```sh
npm i github-api-client --save
```

## How to use

```js
import GithubApiClient from 'GithubApiClient';

const ghClient = new GithubApiClient();
```

## Methods

### user( user )

> Get user info by user.

```js
ghClient.user('tunadao1')
	.then(res => {
		//your code using response
	});
```

### repos( options )

> Get repositories info by username.

```js
const options = {
	username: 'tunadao1',
	page: 1, //Optional
	limit: 50 //Optional
};
    
ghClient.repos( options )
	.then(res => {
		//your code using response
	});
```

### issues( options )

> Get issues info by user and repository.

```js
const options = {
	username: 'tunadao1',
	repository: 'github-client'
};

ghClient.issues( options )
	.then(res => {
		//your code using response
	});
```