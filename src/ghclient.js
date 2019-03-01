import Me from './ghclient/Me';
import Search from './ghclient/Search';
import Repository from './ghclient/Repository';
import Issue from './ghclient/Issue';

const ghclient = username => ({
  me: () => new Me(username),
  search: () => new Search(),
  repository: name => new Repository(name),
  issue: (name,id) => new Issue(name,id),
});

export default ghclient;
