var double_click, drag, drag_move, drag_start, drag_stop, get_cookie, highest_zIndex, load_from_file, offsetX, offsetY, set_cookie, startX, startY;

drag = false;

offsetX = 0;

offsetY = 0;

startX = 0;

startY = 0;

highest_zIndex = 0;

set_cookie = function(key, val) {
  var date;
  date = new Date;
  date.setDate(date.getDate() + 30);
  document.cookie = key + '=' + val + '; expires=' + date.toUTCString();
  return console.log('SET COOKIE | ' + key + ' = ' + val);
};

get_cookie = function(key) {
  var re;
  re = new RegExp('(?:(?:^|.*;\\s*)' + key + '\\s*\\=\\s*([^;]*).*$)|^.*$');
  return document.cookie.replace(re, '$1');
};

drag_start = function(e) {
  e = e || window.event;
  if (e.target.className.indexOf('drag') === -1) {
    return true;
  }
  if (!e.target) {
    e.target = e.srcElement;
    e.button--;
  }
  if (e.button !== 0) {
    return true;
  }
  if (e.preventDefault) {
    e.preventDefault();
  }
  offsetX = e.clientX;
  offsetY = e.clientY;
  drag = e.target;
  drag.onmousemove = drag_move;
  if (!e.target.style.left) {
    e.target.style.left = '0px';
  }
  if (!e.target.style.bottom) {
    e.target.style.bottom = '0px';
  }
  startX = parseInt(e.target.style.left);
  startY = parseInt(e.target.style.bottom);
  highest_zIndex++;
  e.target.style.zIndex = highest_zIndex;
  return false;
};

drag_move = function(e) {
  var is_pnj;
  e = e || window.event;
  if (!e.target) {
    e.target = e.srcElement;
  }
  if (!drag) {
    return;
  }
  is_pnj = drag.className.indexOf('actor') !== -1;
  e.target.style.left = startX + e.clientX - offsetX + 'px';
  if (!is_pnj || e.shiftKey) {
    e.target.style.bottom = startY - e.clientY + offsetY + 'px';
  }
  return false;
};

drag_stop = function(e) {
  e = e || window.event;
  if (!e.target) {
    e.target = e.srcElement;
  }
  drag = null;
  document.onmousemove = null;
};

double_click = function(e) {
  e = e || window.event;
  e.target = e.target || e.srcElement;
  if (e.target.className.indexOf('actor') === -1) {
    return true;
  }
  return e.target.classList.toggle('flipX');
};

load_from_file = function(file_in, img_out, bg_out) {
  var file, fr;
  file = document.getElementById(file_in);
  if (!file.files || !file.files.length) {
    console.log('No file selected');
    alert('Seleciona primeiro o ficheiro, baka!');
    return;
  }
  if (!FileReader) {
    console.log('No support for FileReader');
    return;
  }
  fr = new FileReader;
  fr.onload = function() {
    if (img_out) {
      document.querySelector(img_out).src = fr.result;
    }
    if (bg_out) {
      console.log(document.querySelector(bg_out));
      console.log(fr.result);
      return document.querySelector(bg_out).style.backgroundImage = 'url(' + fr.result + ')';
    }
  };
  return fr.readAsDataURL(file.files[0]);
};

(function(window, document, querySelector) {
  var conf_region, conf_username, draw_avatar, draw_avatar_dest, draw_avatar_portrait, get_player_avatar, get_player_info, load_cookies, load_region, load_username, player_avatar, player_id, player_info, populate_avatars, populate_emotions, populate_emotions_sub, populate_scenes, populate_scenes_sub, scriptTag, sites, sort_assets;
  scriptTag = document.createElement('script');
  sites = {
    br: 'amordoce.com',
    de: 'sweetamoris.de',
    es: 'corazondemelon.es',
    fi: 'flirttistoori.com',
    fr: 'amoursucre.com',
    hu: 'csabitasboljeles.hu',
    it: 'dolceflirt.it',
    mx: 'corazondebombon.com',
    pl: 'slodkiflirt.pl',
    ro: 'sweetflirt.ro',
    ru: 'sladkiiflirt.ru',
    tr: 'askito-m.com',
    uk: 'sweetcrush.co.uk',
    us: 'mycandylove.com'
  };
  conf_region = 'br';
  conf_username = '';
  load_cookies = function() {
    load_region();
    return load_username();
  };
  load_region = function() {
    var val;
    val = get_cookie('region');
    if (val) {
      conf_region = val;
      console.log('REGION | ' + conf_region);
      return querySelector('#region_edit option[value="' + conf_region + '"]').selected = true;
    }
  };
  load_username = function() {
    var val;
    val = get_cookie('username');
    if (val) {
      conf_username = val;
      console.log('USERNAME | ' + conf_username);
      querySelector('#username_edit').value = conf_username;
      return querySelector('#username_submit').dispatchEvent(new Event('click'));
    }
  };
  player_info = null;
  player_id = null;
  player_avatar = null;
  get_player_info = function(username, callback) {
    if (!username) {
      callback(null);
    }
    $.ajax({
      url: "https://mcl.sandrohc.net/" + conf_region + "/v2/profile/find/" + username,
      headers: {
        "X-Beemoov-Application": 'anonymous',
        "X-Beemoov-Signature": 'e33b9ed89eeee95172d6db8a8143d660c9568aa9',
        "X-Beemoov-Timestamp": '1487082505641'
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log("Error while fetching player info");
        console.log(errorThrown);
        return callback(null);
      },
      success: function(data) {
        return callback(data.data);
      }
    });
  };
  get_player_avatar = function(id, callback) {
    $.ajax({
      url: "https://mcl.sandrohc.net/" + conf_region + "/v2/avatar/" + id,
      error: function(jqXHR, textStatus, errorThrown) {
        console.log("Error while fetching player avatar");
        return console.log(errorThrown);
      },
      success: function(data) {
        return callback(data.data);
      }
    });
  };
  draw_avatar_dest = null;
  draw_avatar_portrait = null;
  draw_avatar = function(is_portrait, dest) {
    var add_clothes, add_comma, bg, i, j, ref, site, timestamp, type;
    if (!player_avatar) {
      if (!player_id) {
        if (!player_info) {
          if (conf_username) {
            timestamp = (new Date).getTime();
            dest.src = 'http://avatars.' + sites[conf_region] + '/' + (is_portrait ? 'face' : 'full') + '/' + conf_username + '.' + timestamp + '.png';
          } else {
            dest.src = 'assets/img/' + (is_portrait ? 'face' : 'body') + '_unknown.png';
          }
          return;
        }
        player_id = player_info.player.id;
      }
      draw_avatar_dest = dest;
      draw_avatar_portrait = is_portrait;
      get_player_avatar(player_id, function(data) {
        player_avatar = data;
        return draw_avatar(draw_avatar_portrait, draw_avatar_dest);
      });
      return;
    }
    site = 'http://assets.' + sites[conf_region] + '/';
    type = is_portrait ? 'portrait' : 'normal';
    bg = '';
    add_comma = false;
    add_clothes = function(data, color, clothe_type) {
      if (add_comma) {
        bg += ',';
      }
      add_comma = true;
      bg += 'url(' + site + clothe_type + '/web/' + type + '/' + data.id + '-' + data.security;
      if (color) {
        bg += '_' + color.id + '-' + color.security;
      }
      return bg += '.png)';
    };
    for (i = j = ref = player_avatar.clothes.length - 1; ref <= 0 ? j <= 0 : j >= 0; i = ref <= 0 ? ++j : --j) {
      add_clothes(player_avatar.clothes[i], null, 'clothe');
    }
    add_clothes(player_avatar.avatar.headAccessory, null, 'avatarpart');
    add_clothes(player_avatar.avatar.mouthType, null, 'avatarpart');
    add_clothes(player_avatar.avatar.eyebrowsType, player_avatar.avatar.hairColor, 'avatarpart');
    add_clothes(player_avatar.avatar.eyeType, player_avatar.avatar.eyeColor, 'avatarpart');
    add_clothes(player_avatar.avatar.hairType, player_avatar.avatar.hairColor, 'avatarpart');
    add_clothes(player_avatar.avatar.bodyType, null, 'avatarpart');
    dest.src = 'assets/img/' + (is_portrait ? 'face' : 'body') + '_placeholder.png';
    dest.style.backgroundImage = bg;
  };
  sort_assets = function() {
    var comparator;
    comparator = function(a, b) {
      var ref, ref1;
      a = a.name.toUpperCase();
      b = b.name.toUpperCase();
      return (ref = a < b) != null ? ref : {
        1: (ref1 = a > b) != null ? ref1 : -{
          1: 0
        }
      };
    };
    CONFIG.avatars.sort(comparator);
    return CONFIG.emotions.sort(comparator);
  };
  populate_scenes = function(inputs, defaults) {
    return inputs.forEach(function(input_id, input_index) {
      var input;
      input = querySelector(input_id);
      CONFIG.scenes.forEach(function(e, i) {
        var el, ref;
        el = document.createElement('option');
        el.textContent = e.name;
        el.value = i;
        el.selected = (ref = e.name === defaults[input_index]) != null ? ref : {
          'true': void 0
        };
        return input.appendChild(el);
      });
      return $(input).material_select;
    });
  };
  populate_scenes_sub = function(index, input) {
    var scene;
    while (input.options.length > 0) {
      input.remove(0);
    }
    scene = CONFIG.scenes[index];
    scene.variations.forEach(function(e, i) {
      var el;
      el = document.createElement('option');
      el.textContent = e.name;
      el.value = i;
      el.dataset.scene = index;
      return input.appendChild(el);
    });
    $(input).material_select();
    return input.dispatchEvent(new Event('change'));
  };
  populate_avatars = function(inputs, defaults) {
    return inputs.forEach(function(input_id, input_index) {
      var input;
      input = querySelector(input_id);
      CONFIG.avatars.forEach(function(e, i) {
        var el, ref;
        el = document.createElement('option');
        el.textContent = e.name;
        el.value = i;
        el.dataset.checksum = e.checksum;
        el.selected = (ref = e.name === defaults[input_index]) != null ? ref : {
          'true': void 0
        };
        return input.appendChild(el);
      });
      return $(input).material_select();
    });
  };
  populate_emotions = function(inputs, defaults) {
    return inputs.forEach(function(input_id, input_index) {
      var input;
      input = querySelector(input_id);
      CONFIG.emotions.forEach(function(e, i) {
        var el, ref;
        el = document.createElement('option');
        el.textContent = e.name;
        el.value = i;
        el.selected = (ref = e.name === defaults[input_index]) != null ? ref : {
          'true': void 0
        };
        return input.appendChild(el);
      });
      return $(input).material_select();
    });
  };
  populate_emotions_sub = function(index, input) {
    var emotion;
    while (input.options.length > 0) {
      input.remove(0);
    }
    emotion = CONFIG.emotions[index];
    emotion.variations.forEach(function(e, i) {
      var el;
      el = document.createElement('option');
      el.textContent = e.name;
      el.value = i;
      el.dataset.emotion = index;
      return input.appendChild(el);
    });
    $(input).material_select();
    return input.dispatchEvent(new Event('change'));
  };
  scriptTag.addEventListener('load', function() {
    var bubble, eventChange, loveometer, loveometer_level, update_actor, update_actor_sub, update_avatar, update_response, update_scene, update_scene_sub, update_username, update_username_btn;
    document.body.innerHTML = Mustache.render(querySelector('body').innerHTML, CONFIG);
    update_actor = function() {
      var sub;
      sub = querySelector(this.dataset.sub);
      return populate_emotions_sub(this.value, sub);
    };
    update_actor_sub = function() {
      var emotion, name, target, variation;
      name = this.options[this.selectedIndex].textContent;
      emotion = CONFIG.emotions[this.options[this.selectedIndex].dataset.emotion];
      console.log('EMOTION SELECTED | ' + emotion.name + ' (' + name + ')');
      target = querySelector(this.dataset.target);
      target.style.src = '';
      if (emotion.name === '[Nada]') {
        target.style.display = 'none';
        return;
      } else {
        target.style.display = 'block';
      }
      if (emotion.name === '[Docete]') {
        draw_avatar(false, target);
        target.style.height = '150%';
        target.style.bottom = '-300px';
      } else {
        variation = emotion.variations[this.value];
        target.src = 'assets/img/emotion/' + variation.id + (variation.checksum ? '-' + variation.checksum : '') + '.png';
        target.style.backgroundImage = '';
        target.style.height = '92.24138%';
        target.style.bottom = '0';
      }
    };
    update_scene = function() {
      var sub;
      sub = querySelector(this.dataset.sub);
      return populate_scenes_sub(this.value, sub);
    };
    update_scene_sub = function() {
      var name, scene, target, variation;
      name = this.options[this.selectedIndex].textContent;
      scene = CONFIG.scenes[this.options[this.selectedIndex].dataset.scene];
      console.log('SCENE SELECTED | ' + scene.name + ' (' + name + ')');
      target = querySelector(this.dataset.target);
      variation = scene.variations[this.value];
      return target.style.backgroundImage = 'url(assets/img/scene/' + variation.id + (variation.checksum ? '-' + variation.checksum : '') + '.jpg)';
    };
    loveometer_level = function() {
      querySelector('#loveometer .gauge').style.height = this.value / 2 + 50 + '%';
      return querySelector('#loveometer .heart-text').innerHTML = this.value + '%';
    };
    loveometer = function() {
      return querySelector('#loveometer').style.display = this.checked ? 'block' : 'none';
    };
    bubble = function() {
      if (this.value !== '') {
        querySelector('.bubble').style.display = 'block';
        return querySelector('.bubble').innerHTML = this.value.replace(/\n/g, '<br>');
      } else {
        return querySelector('.bubble').style.display = 'none';
      }
    };
    update_response = function() {
      if (this.value !== '') {
        querySelector('.responses-wrapper').style.display = 'block';
        querySelector('.player').style.display = 'block';
        querySelector('.responses').innerHTML = '<li class="response"><span class="text">' + this.value.replace(/\n/gi, '</span></li><li class="response"><span class="text">') + '</span></li>';
        return document.querySelectorAll('.response').forEach(function(el) {
          return el.addEventListener('click', (function(e) {
            e = e || window.event;
            e.target = e.target || e.srcElement;
            return e.target.classList.toggle('checked');
          }), false);
        });
      } else {
        querySelector('.responses-wrapper').style.display = 'none';
        return querySelector('.player').style.display = 'none';
      }
    };
    update_username_btn = function() {
      conf_username = querySelector('#username_edit').value;
      conf_region = querySelector('#region_edit').value;
      set_cookie('username', conf_username);
      set_cookie('region', conf_region);
      return get_player_info(conf_username, function(data) {
        var query;
        player_info = data;
        if (player_info) {
          player_id = player_info.player.id;
        }
        query = querySelector('#actor1_edit');
        if (query.options[query.selectedIndex].text === '[Docete]') {
          query.dispatchEvent(eventChange);
        }
        query = querySelector('#actor2_edit');
        if (query.options[query.selectedIndex].text === '[Docete]') {
          query.dispatchEvent(eventChange);
        }
        query = querySelector('#avatar_edit');
        if (query.options[query.selectedIndex].text === '[Docete]') {
          return query.dispatchEvent(eventChange);
        }
      });
    };
    update_username = function(key) {
      if (key.keyCode === 13) {
        key.preventDefault();
        return update_username_btn();
      }
    };
    update_avatar = function() {
      var avatar, el;
      avatar = CONFIG.avatars[this.value];
      el = querySelector('.player-avatar');
      el.src = '';
      if (avatar.name === '[Nada]') {
        el.style.display = 'none';
        return;
      } else {
        el.style.display = 'block';
      }
      if (avatar.name === '[Docete]') {
        el.style.bottom = '70px';
        draw_avatar(true, el);
      } else {
        el.style.bottom = '0';
        el.style.backgroundImage = '';
        el.src = 'assets/img/avatar/' + avatar.id + (avatar.checksum ? '-' + avatar.checksum : '') + '.png';
      }
    };
    (function(elements) {
      var el_name, event, results;
      sort_assets();
      populate_scenes(['#scene_edit'], ['Sala de Aula A']);
      populate_avatars(['#avatar_edit'], ['[Docete]']);
      populate_emotions(['#actor1_edit', '#actor2_edit'], ['Nathaniel', 'Castiel']);
      results = [];
      for (el_name in elements) {
        if (elements.hasOwnProperty(el_name)) {
          results.push((function() {
            var results1;
            results1 = [];
            for (event in elements[el_name]) {
              if (elements[el_name].hasOwnProperty(event)) {
                results1.push($('#' + el_name).on(event, elements[el_name][event]));
              } else {
                results1.push(void 0);
              }
            }
            return results1;
          })());
        } else {
          results.push(void 0);
        }
      }
      return results;
    })({
      actor1_edit: {
        change: update_actor,
        keyup: update_actor
      },
      actor1_sub_edit: {
        change: update_actor_sub,
        keyup: update_actor_sub
      },
      actor2_edit: {
        change: update_actor,
        keyup: update_actor
      },
      actor2_sub_edit: {
        change: update_actor_sub,
        keyup: update_actor_sub
      },
      scene_edit: {
        change: update_scene,
        keyup: update_scene
      },
      scene_sub_edit: {
        change: update_scene_sub,
        keyup: update_scene_sub
      },
      lovelevel_edit: {
        input: loveometer_level
      },
      lovelevel_visible: {
        change: loveometer
      },
      bubble_edit: {
        keyup: bubble
      },
      response_edit: {
        keyup: update_response
      },
      username_submit: {
        click: update_username_btn
      },
      username_edit: {
        keyup: update_username
      },
      avatar_edit: {
        change: update_avatar,
        keyup: update_avatar
      }
    });
    load_cookies();
    eventChange = new Event('change');
    querySelector('#scene_edit').dispatchEvent(eventChange);
    querySelector('#actor1_edit').dispatchEvent(eventChange);
    querySelector('#actor2_edit').dispatchEvent(eventChange);
    $('ul.tabs').tabs();
    $('select').material_select();
    document.ondblclick = double_click;
    document.onmousedown = drag_start;
    return document.onmouseup = drag_stop;
  });
  scriptTag.src = 'assets/js/conf.js';
  return document.head.appendChild(scriptTag);
})(window, document, function(a) {
  return document.querySelector(a);
});
