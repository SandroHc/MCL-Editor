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
      document.querySelector(bg_out).style.backgroundImage = 'url(' + fr.result + ')';
    }
    return console.log('IMG LOADED');
  };
  return fr.readAsDataURL(file.files[0]);
};

(function(window, document, querySelector) {
  var populate_avatars, populate_emotions, populate_emotions_sub, populate_scenes, populate_scenes_sub, scriptTag, sort_assets;
  scriptTag = document.createElement('script');
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
      console.log('VAR | ' + e.name);
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
    var assets, bubble, event, loveometer, loveometer_level, region, render, site, sites, update_actor, update_actor_sub, update_avatar, update_response, update_scene, update_scene_sub, update_user, update_user_name, username;
    render = Mustache.render(querySelector('body').innerHTML, CONFIG);
    site = 'http://assets.amordoce.com/';
    assets = {
      body: 'assets/img/unknown_body.png',
      face: 'assets/img/unknown_face.png'
    };
    sites = {
      br: 'amordoce.com',
      de: 'sweetamoris.de',
      es: 'corazondemelon.es',
      fi: 'flirttistoori.com',
      fr: 'amoursucre.com',
      hu: 'csabitasboljeles.hu',
      it: 'dolceflirt.it',
      jp: 'mycandylove.jp',
      mx: 'corazondebombon.com',
      pl: 'slodkiflirt.pl',
      ro: 'sweetflirt.ro',
      ru: 'sladkiiflirt.ru',
      tr: 'askito-m.com',
      uk: 'sweetcrush.co.uk',
      us: 'mycandylove.com'
    };
    update_actor = function() {
      var sub;
      sub = querySelector(this.dataset.sub);
      return populate_emotions_sub(this.value, sub);
    };
    update_actor_sub = function() {
      var emotion, name, ref, target, variation;
      name = this.options[this.selectedIndex].textContent;
      emotion = CONFIG.emotions[this.options[this.selectedIndex].dataset.emotion];
      console.log('EMOTION SELECTED | ' + emotion.name + ' (' + name + ')');
      target = querySelector(this.dataset.target);
      target.style.display = (ref = emotion.name !== '[Nada]') != null ? ref : {
        'block': 'none'
      };
      if (emotion.name === '[Docete]') {
        target.src = assets.body;
        target.style.height = '150%';
        target.style.bottom = '-300px';
      } else {
        if (emotion.name === '[Nada]') {
          return;
        }
        variation = emotion.variations[this.value];
        if (variation.checksum) {
          target.src = site + 'emotion/web/high/' + variation.id + '-' + variation.checksum + '.png';
        } else {
          target.src = 'assets/img/emotion/' + variation.id + '.png';
        }
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
      console.log('SCENE SELECTED | ' + scene.name + ' (#' + scene.variations[this.value].id + ' - ' + name + ')');
      target = querySelector(this.dataset.target);
      variation = scene.variations[this.value];
      if (variation.checksum) {
        return target.style.backgroundImage = 'url(' + site + 'place/web/high/' + variation.id + '-' + variation.checksum + '.jpg)';
      } else {
        return target.style.backgroundImage = 'url(assets/img/scene/' + variation.id + '.jpg)';
      }
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
    update_user = function() {
      var query, region, timestamp, user;
      user = querySelector('#username_edit').value !== '' ? querySelector('#username_edit').value : 'd';
      region = sites[querySelector('#region_edit').value];
      timestamp = (new Date).getTime();
      assets.face = 'http://avatars.' + region + '/face/' + user + '.' + timestamp + '.png';
      assets.body = 'http://avatars.' + region + '/full/' + user + '.' + timestamp + '.png';
      query = querySelector('#actor1_edit');
      if (query.options[query.selectedIndex].text === '[Docete]') {
        querySelector('#actor1').src = assets.body;
      }
      query = querySelector('#actor2_edit');
      if (query.options[query.selectedIndex].text === '[Docete]') {
        querySelector('#actor2').src = assets.body;
      }
      query = querySelector('#avatar_edit');
      if (query.options[query.selectedIndex].text === '[Docete]') {
        querySelector('.player-avatar').src = assets.face;
      }
      set_cookie('region', querySelector('#region_edit').value);
      return set_cookie('username', querySelector('#username_edit').value);
    };
    update_user_name = function(key) {
      if (key.keyCode === 13) {
        key.preventDefault();
        return update_user();
      }
    };
    update_avatar = function() {
      var avatar, el, ref;
      avatar = CONFIG.avatars[this.value];
      el = querySelector('.player-avatar');
      el.style.display = (ref = avatar.name !== '[Nada]') != null ? ref : {
        'block': 'none'
      };
      if (avatar.name === '[Docete]') {
        el.src = assets.face;
        el.style.bottom = '70px';
      } else {
        if (avatar.name === '[Nada]') {
          return;
        }
        if (avatar.checksum) {
          el.src = site + 'npc/web/thumbnail/' + avatar.id + '-' + avatar.checksum + '.png';
        } else {
          el.src = 'assets/img/avatar/' + avatar.id + '.png';
        }
        el.style.bottom = '0';
      }
    };
    querySelector('body').innerHTML = render;
    (function(elements) {
      var el_name, event, results;
      sort_assets();
      populate_scenes(['#scene_edit'], ['Sala de Aula A']);
      populate_avatars(['#avatar_edit'], ['[Docete]']);
      populate_emotions(['#actor1_edit', '#actor2_edit'], ['Nathaniel', 'Castiel']);
      $('select').material_select();
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
        click: update_user
      },
      username_edit: {
        keyup: update_user_name
      },
      avatar_edit: {
        change: update_avatar,
        keyup: update_avatar
      }
    });
    event = new Event('change');
    querySelector('#scene_edit').dispatchEvent(event);
    querySelector('#actor1_edit').dispatchEvent(event);
    querySelector('#actor2_edit').dispatchEvent(event);
    $('ul.tabs').tabs();
    region = get_cookie('region');
    if (region) {
      console.log('REGION | ' + region);
      querySelector('#region_edit option[value="' + region + '"]').selected = true;
    }
    username = get_cookie('username');
    if (username) {
      console.log('USERNAME | ' + username);
      querySelector('#username_edit').value = username;
      querySelector('#username_submit').dispatchEvent(new Event('click'));
    }
    document.ondblclick = double_click;
    document.onmousedown = drag_start;
    return document.onmouseup = drag_stop;
  });
  scriptTag.src = 'assets/js/conf.js';
  return document.head.appendChild(scriptTag);
})(window, document, function(a) {
  return document.querySelector(a);
});
