require 'yaml'

#a = YAML.load(File.read('links_titles.yml')) Small set
#a = YAML.load(File.read('all_links_to_titles.yml'))
a = YAML.load(File.read('bad_links.yml'))
b = YAML.load(File.read('links2title.yml'))

out = {}
a.each do |k, t|
    b.each do |bk, bt|

        if bt == t
            lang_b = bk[0..3]
            if k.include?(lang_b)
                out[k] = bk
            end
        end
        
    end
end

File.open("bad_link_map.yml", "w") { |file| file.write(out.to_yaml) }
