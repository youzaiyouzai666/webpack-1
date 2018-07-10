function MyPlugin() {
    this.chunkVersions = {};
  }
  
  MyPlugin.prototype.apply = function(compiler) {
    compiler.plugin('emit', function(compilation, callback) {
  
      var changedChunks = compilation.chunks.filter(function(chunk) {
        var oldVersion = this.chunkVersions[chunk.name];
        this.chunkVersions[chunk.name] = chunk.hash;
        return chunk.hash !== oldVersion;
      }.bind(this));
  
      callback();
    }.bind(this));
  };
  
  module.exports = MyPlugin;