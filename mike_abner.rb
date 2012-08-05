require 'sinatra/base'

class MikeAbner < Sinatra::Base

  get '/' do
    send_file( File.expand_path('index.html', 'public') )
  end

end
