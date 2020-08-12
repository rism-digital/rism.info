require 'yaml'
files = Dir.glob('**/*.md')

links = YAML.load(File.read('bad_link_map.yml'))


files.each do |f|
    txt = File.read(f)
    links.each do |l, s|
        substitute = s.gsub("/de/", "/").gsub("/en/", "/").gsub("/fr/", "/").gsub(".md", ".html")
        txt = txt.gsub(l, substitute)
    end
    File.write(f, txt)
end
