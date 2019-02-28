import Me from './ghclient/Me';
import Search from './ghclient/Search';
import Repository from './ghclient/Repository';

const ghclient = username => ({
  me: () => new Me(username),
  search: () => new Search(),
  repository: name => new Repository(name),
});

export default ghclient;
