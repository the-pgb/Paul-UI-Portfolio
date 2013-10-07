# If you have OpenSSL installed, we recommend updating
# the following line to use "https"
source 'http://rubygems.org'
ruby "1.9.3"

gem 'rack-contrib'
gem "middleman-bourbon"
gem "middleman-neat"
gem "middleman-smusher", "~> 3.0.0"
gem "middleman-blog"


group :development do
  gem "middleman", "~>3.1.1"
  gem 'unicorn'
  gem 'bourbon'
  gem 'neat'
end


gem "stipe"

# Live-reloading plugin
gem "middleman-livereload", "~> 3.1.0"

# For faster file watcher updates:
# gem "wdm", "~> 0.1.0") # Windows

# Cross-templating language block fix for Ruby 1.8
platforms :mri_18 do
  gem "ruby18_source_location"
end

