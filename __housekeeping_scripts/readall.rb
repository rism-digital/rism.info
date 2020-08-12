require 'yaml'
files = Dir.glob('**/*.md')

titles = {}

files.each do |f|

    data = YAML.load(File.read(f))

    #titles[data["title"]] = "/" + f
    cat = data["category"]
    date = data["date"].to_s.gsub("-", "/")
    lang = data["lang"]
    short_title = File.basename(f)[11..-1].gsub(".md", ".html")
    #puts cat
    #puts date
    #puts short_title
    url = "/" + lang + "/" + cat + "/" + date + "/" + short_title
    titles[url] = data["title"]
end

#puts titles.count
#puts titles
File.open("links2title.yml", "w") { |file| file.write(titles.to_yaml) }
