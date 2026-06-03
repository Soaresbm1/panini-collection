// ============================================================
    //  DONNÉES DE L'ALBUM PANINI 2026
    //  Album: 980 stickers, 48 équipes (20 stickers par équipe = 960)
    //  + 20 stickers de sections spéciales (Intro, FIFA Museum, etc.)
    // ============================================================

    // 48 équipes qualifiées, organisées par groupe (A à L) comme l'album
    // c1 = couleur principale du maillot, c2 = couleur secondaire/accent
    const TEAMS = [
      // Groupe A
      { code: 'MEX', name: 'Mexique', group: 'A', flag: '🇲🇽', c1: '#006847', c2: '#ce1126' },
      { code: 'RSA', name: 'Afrique du Sud', group: 'A', flag: '🇿🇦', c1: '#007749', c2: '#ffb612' },
      { code: 'KOR', name: 'Corée du Sud', group: 'A', flag: '🇰🇷', c1: '#c60c30', c2: '#003478' },
      { code: 'CZE', name: 'Tchéquie', group: 'A', flag: '🇨🇿', c1: '#d7141a', c2: '#11457e' },
      // Groupe B
      { code: 'CAN', name: 'Canada', group: 'B', flag: '🇨🇦', c1: '#d52b1e', c2: '#ffffff' },
      { code: 'SUI', name: 'Suisse', group: 'B', flag: '🇨🇭', c1: '#d52b1e', c2: '#ffffff' },
      { code: 'QAT', name: 'Qatar', group: 'B', flag: '🇶🇦', c1: '#8a1538', c2: '#ffffff' },
      { code: 'BIH', name: 'Bosnie-Herzégovine', group: 'B', flag: '🇧🇦', c1: '#002395', c2: '#ffec00' },
      // Groupe C
      { code: 'BRA', name: 'Brésil', group: 'C', flag: '🇧🇷', c1: '#ffdf00', c2: '#009c3b' },
      { code: 'MAR', name: 'Maroc', group: 'C', flag: '🇲🇦', c1: '#c1272d', c2: '#006233' },
      { code: 'HAI', name: 'Haïti', group: 'C', flag: '🇭🇹', c1: '#00209f', c2: '#d21034' },
      { code: 'SCO', name: 'Écosse', group: 'C', flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', c1: '#005eb8', c2: '#ffffff' },
      // Groupe D
      { code: 'USA', name: 'États-Unis', group: 'D', flag: '🇺🇸', c1: '#002868', c2: '#bf0a30' },
      { code: 'PAR', name: 'Paraguay', group: 'D', flag: '🇵🇾', c1: '#d52b1e', c2: '#0038a8' },
      { code: 'AUS', name: 'Australie', group: 'D', flag: '🇦🇺', c1: '#00843d', c2: '#ffcd00' },
      { code: 'TUR', name: 'Türkiye', group: 'D', flag: '🇹🇷', c1: '#e30a17', c2: '#ffffff' },
      // Groupe E
      { code: 'GER', name: 'Allemagne', group: 'E', flag: '🇩🇪', c1: '#000000', c2: '#dd0000' },
      { code: 'CUW', name: 'Curaçao', group: 'E', flag: '🇨🇼', c1: '#002b7f', c2: '#f9e814' },
      { code: 'CIV', name: "Côte d'Ivoire", group: 'E', flag: '🇨🇮', c1: '#f77f00', c2: '#009e60' },
      { code: 'ECU', name: 'Équateur', group: 'E', flag: '🇪🇨', c1: '#ffdd00', c2: '#034ea2' },
      // Groupe F
      { code: 'NED', name: 'Pays-Bas', group: 'F', flag: '🇳🇱', c1: '#ff6900', c2: '#21468b' },
      { code: 'JPN', name: 'Japon', group: 'F', flag: '🇯🇵', c1: '#002a5c', c2: '#bc002d' },
      { code: 'TUN', name: 'Tunisie', group: 'F', flag: '🇹🇳', c1: '#e70013', c2: '#ffffff' },
      { code: 'SWE', name: 'Suède', group: 'F', flag: '🇸🇪', c1: '#005293', c2: '#fecb00' },
      // Groupe G
      { code: 'BEL', name: 'Belgique', group: 'G', flag: '🇧🇪', c1: '#c8102e', c2: '#000000' },
      { code: 'EGY', name: 'Égypte', group: 'G', flag: '🇪🇬', c1: '#ce1126', c2: '#000000' },
      { code: 'IRN', name: 'Iran', group: 'G', flag: '🇮🇷', c1: '#239f40', c2: '#da0000' },
      { code: 'NZL', name: 'Nouvelle-Zélande', group: 'G', flag: '🇳🇿', c1: '#000000', c2: '#ffffff' },
      // Groupe H
      { code: 'ESP', name: 'Espagne', group: 'H', flag: '🇪🇸', c1: '#c60b1e', c2: '#ffc400' },
      { code: 'CPV', name: 'Cap-Vert', group: 'H', flag: '🇨🇻', c1: '#003893', c2: '#cf2027' },
      { code: 'KSA', name: 'Arabie Saoudite', group: 'H', flag: '🇸🇦', c1: '#006c35', c2: '#ffffff' },
      { code: 'URU', name: 'Uruguay', group: 'H', flag: '🇺🇾', c1: '#7b9fd4', c2: '#001489' },
      // Groupe I
      { code: 'FRA', name: 'France', group: 'I', flag: '🇫🇷', c1: '#002395', c2: '#ed2939' },
      { code: 'SEN', name: 'Sénégal', group: 'I', flag: '🇸🇳', c1: '#00853f', c2: '#fdef42' },
      { code: 'NOR', name: 'Norvège', group: 'I', flag: '🇳🇴', c1: '#ba0c2f', c2: '#00205b' },
      { code: 'IRQ', name: 'Irak', group: 'I', flag: '🇮🇶', c1: '#007a3d', c2: '#ce1126' },
      // Groupe J
      { code: 'ARG', name: 'Argentine', group: 'J', flag: '🇦🇷', c1: '#75aadb', c2: '#ffffff' },
      { code: 'ALG', name: 'Algérie', group: 'J', flag: '🇩🇿', c1: '#007229', c2: '#d21034' },
      { code: 'AUT', name: 'Autriche', group: 'J', flag: '🇦🇹', c1: '#ed2939', c2: '#ffffff' },
      { code: 'JOR', name: 'Jordanie', group: 'J', flag: '🇯🇴', c1: '#007a3d', c2: '#ce1126' },
      // Groupe K
      { code: 'POR', name: 'Portugal', group: 'K', flag: '🇵🇹', c1: '#006600', c2: '#ff0000' },
      { code: 'UZB', name: 'Ouzbékistan', group: 'K', flag: '🇺🇿', c1: '#0099b5', c2: '#1eb53a' },
      { code: 'COL', name: 'Colombie', group: 'K', flag: '🇨🇴', c1: '#fcd116', c2: '#003893' },
      { code: 'COD', name: 'RD Congo', group: 'K', flag: '🇨🇩', c1: '#007fff', c2: '#f7d618' },
      // Groupe L
      { code: 'ENG', name: 'Angleterre', group: 'L', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', c1: '#ffffff', c2: '#ce1124' },
      { code: 'CRO', name: 'Croatie', group: 'L', flag: '🇭🇷', c1: '#ff0000', c2: '#171796' },
      { code: 'GHA', name: 'Ghana', group: 'L', flag: '🇬🇭', c1: '#006b3f', c2: '#fcd116' },
      { code: 'PAN', name: 'Panama', group: 'L', flag: '🇵🇦', c1: '#db0000', c2: '#005293' },
    ];

    const SPECIAL_SECTIONS = [
      { code: 'INTRO', name: 'Introduction & Emblème', count: 9, special: true },
      { code: 'FIFA', name: 'FIFA Museum (Champions)', count: 11, special: true },
    ];

    const STICKERS_PER_TEAM = 20;

    // ============================================================
    //  ÉTAT
    // ============================================================
    let state = {};   // { "FRA1": { owned: true, dupes: 2 }, ... }
    let currentFilter = 'all';
    let searchTerm = '';
    const openTeams = new Set();

    // Firebase
    let currentUser = null;
    let firestoreUnsub = null;   // pour arrêter d'écouter la base au logout
    let purchasesUnsub = null;   // listener achats
    let isInitialLoad = true;    // pour ne pas re-render à chaque petite écriture qu'on fait soi-même
    const pendingWrites = new Set(); // codes en cours d'écriture (pour ignorer le rebond)

    // Achats budget
    let purchases = []; // [{ id, packs, price, date }]

    // ============================================================
    //  PERSISTANCE FIRESTORE
    //  Structure : users/{uid}/stickers/{stickerCode}  -> { owned: bool, dupes: number }
    // ============================================================
    function userStickersCollection() {
      if (!currentUser) return null;
      return window.fb.collection(window.fb.db, 'users', currentUser.uid, 'stickers');
    }

    function stickerDocRef(code) {
      return window.fb.doc(window.fb.db, 'users', currentUser.uid, 'stickers', code);
    }

    // Démarre l'écoute temps réel de la collection
    function startListening() {
      if (firestoreUnsub) firestoreUnsub();
      const col = userStickersCollection();
      if (!col) return;

      firestoreUnsub = window.fb.onSnapshot(col, (snap) => {
        const newState = {};
        snap.forEach(docSnap => {
          newState[docSnap.id] = docSnap.data();
        });
        state = newState;
        isInitialLoad = false;
        updateProgress();
        renderTeams();
        refreshAllAlbumPages();
      }, (err) => {
        console.error('Firestore listen error:', err);
        toast('Erreur de connexion');
      });
    }

    function stopListening() {
      if (firestoreUnsub) { firestoreUnsub(); firestoreUnsub = null; }
      if (purchasesUnsub) { purchasesUnsub(); purchasesUnsub = null; }
    }

    // ---------- Achats budget ----------
    function userPurchasesCollection() {
      if (!currentUser) return null;
      return window.fb.collection(window.fb.db, 'users', currentUser.uid, 'purchases');
    }
    function purchaseDocRef(id) {
      return window.fb.doc(window.fb.db, 'users', currentUser.uid, 'purchases', id);
    }

    function startPurchasesListening() {
      const col = userPurchasesCollection();
      if (!col) return;
      purchasesUnsub = window.fb.onSnapshot(col, (snap) => {
        purchases = [];
        snap.forEach(d => {
          purchases.push({ id: d.id, ...d.data() });
        });
        // tri par date desc
        purchases.sort((a, b) => (b.date || 0) - (a.date || 0));
        renderBudget();
      }, (err) => {
        console.error('Purchases listen error:', err);
      });
    }

    async function addPurchase(packs, price) {
      if (!currentUser) return;
      const id = 'p_' + Date.now() + '_' + Math.random().toString(36).slice(2, 7);
      const data = {
        packs: Number(packs),
        price: Number(price),
        date: Date.now()
      };
      try {
        await window.fb.setDoc(purchaseDocRef(id), data);
      } catch (e) {
        console.error('Add purchase error:', e);
        toast('Erreur lors de l\'ajout');
      }
    }

    async function deletePurchase(id) {
      if (!currentUser) return;
      try {
        await window.fb.deleteDoc(purchaseDocRef(id));
      } catch (e) {
        console.error('Delete purchase error:', e);
      }
    }

    function getSticker(code) {
      return state[code] || { owned: false, dupes: 0 };
    }

    // Écriture optimiste : on met à jour le state local et l'UI, puis on pousse en async
    async function setSticker(code, data) {
      if (!currentUser) return;

      // update local immédiat
      if (!data.owned && data.dupes === 0) {
        delete state[code];
      } else {
        state[code] = data;
      }

      // push à Firestore en background
      try {
        if (!data.owned && data.dupes === 0) {
          await window.fb.deleteDoc(stickerDocRef(code));
        } else {
          await window.fb.setDoc(stickerDocRef(code), data);
        }
      } catch (e) {
        console.error('Save error:', e);
        toast('Erreur de sauvegarde');
      }
    }

    // ============================================================
    //  AUTHENTIFICATION
    // ============================================================
    async function signIn() {
      try {
        await window.fb.signInWithPopup(window.fb.auth, window.fb.provider);
      } catch (e) {
        console.error('Sign-in error:', e);
        if (e.code !== 'auth/popup-closed-by-user') {
          toast('Erreur de connexion');
        }
      }
    }

    async function signOutUser() {
      try {
        await window.fb.signOut(window.fb.auth);
      } catch (e) { console.error(e); }
    }

    function onAuthChange(user) {
      currentUser = user;
      if (user) {
        document.getElementById('signedOut').style.display = 'none';
        document.getElementById('app').style.display = 'block';
        document.getElementById('userBadge').style.display = 'flex';
        const photoEl = document.getElementById('userPhoto');
        if (photoEl && user.photoURL) {
          photoEl.src = user.photoURL;
          photoEl.style.display = 'block';
        }
        state = {};
        purchases = [];
        isInitialLoad = true;
        startListening();
        startPurchasesListening();
      } else {
        document.getElementById('signedOut').style.display = 'flex';
        document.getElementById('app').style.display = 'none';
        document.getElementById('userBadge').style.display = 'none';
        stopListening();
        state = {};
        updateProgress();
      }
    }

    // On attend que les modules Firebase soient chargés
    function initAuth() {
      if (!window.fb) {
        setTimeout(initAuth, 50);
        return;
      }
      window.fb.onAuthStateChanged(window.fb.auth, onAuthChange);
    }
    initAuth();

    // ============================================================
    //  RENDU
    // ============================================================
    function buildAllStickers() {
      const all = [];
      for (const t of TEAMS) {
        for (let i = 1; i <= STICKERS_PER_TEAM; i++) {
          all.push({ code: `${t.code}${i}`, teamCode: t.code, num: i, teamName: t.name });
        }
      }
      for (const s of SPECIAL_SECTIONS) {
        for (let i = 1; i <= s.count; i++) {
          all.push({ code: `${s.code}${i}`, teamCode: s.code, num: i, teamName: s.name, special: true });
        }
      }
      return all;
    }

    const ALL_STICKERS = buildAllStickers();
    const TOTAL = ALL_STICKERS.length;

    function computeStats() {
      let owned = 0, dupes = 0;
      for (const s of ALL_STICKERS) {
        const st = getSticker(s.code);
        if (st.owned) owned++;
        if (st.dupes > 0) dupes += st.dupes;
      }
      return { owned, missing: TOTAL - owned, dupes, total: TOTAL };
    }

    function updateProgress() {
      const { owned, missing, dupes, total } = computeStats();
      document.getElementById('ownedCount').textContent = owned;
      document.getElementById('progressFill').style.width = ((owned / total) * 100) + '%';
      document.getElementById('statOwned').textContent = owned;
      document.getElementById('statMissing').textContent = missing;
      document.getElementById('statDupes').textContent = dupes;

      // counts de filtres
      document.getElementById('cAll').textContent = `(${total})`;
      document.getElementById('cOwned').textContent = `(${owned})`;
      document.getElementById('cMissing').textContent = `(${missing})`;
      let dupeStickerCount = 0;
      for (const s of ALL_STICKERS) if (getSticker(s.code).dupes > 0) dupeStickerCount++;
      document.getElementById('cDupes').textContent = `(${dupeStickerCount})`;
    }

    function passesFilter(sticker) {
      const st = getSticker(sticker.code);
      if (currentFilter === 'owned' && !st.owned) return false;
      if (currentFilter === 'missing' && st.owned) return false;
      if (currentFilter === 'dupes' && st.dupes === 0) return false;

      if (searchTerm) {
        const q = searchTerm.toLowerCase();
        if (!sticker.code.toLowerCase().includes(q) &&
          !sticker.teamName.toLowerCase().includes(q)) return false;
      }
      return true;
    }

    function renderTeams() {
      const container = document.getElementById('teamsContainer');
      const groups = [...TEAMS, ...SPECIAL_SECTIONS.map(s => ({ code: s.code, name: s.name, special: true }))];

      let html = '';
      let anyVisible = false;

      for (const t of groups) {
        const stickers = ALL_STICKERS.filter(s => s.teamCode === t.code);
        const visible = stickers.filter(passesFilter);
        if (visible.length === 0) continue;
        anyVisible = true;

        const ownedCount = stickers.filter(s => getSticker(s.code).owned).length;
        const isComplete = ownedCount === stickers.length;
        const isOpen = openTeams.has(t.code) || searchTerm; // ouvrir auto pendant recherche

        html += `
      <div class="team ${isOpen ? 'open' : ''}" data-team="${t.code}">
        <div class="team-header" onclick="toggleTeam('${t.code}')">
          <span class="team-code ${t.special ? 'special' : ''}">${t.code}</span>
          ${t.group ? `<span class="team-group">${t.group}</span>` : ''}
          <span class="team-name">${t.name}</span>
          <span class="team-progress ${isComplete ? 'complete' : ''}">${ownedCount}/${stickers.length}${isComplete ? ' ✓' : ''}</span>
          <svg class="chevron" viewBox="0 0 16 16" fill="currentColor"><path d="M6 4l4 4-4 4V4z"/></svg>
        </div>
        <div class="stickers-grid">
          ${visible.map(s => renderSticker(s)).join('')}
        </div>
      </div>
    `;
      }

      if (!anyVisible) {
        html = `<div class="empty"><div class="empty-icon">🔍</div>Aucun sticker ne correspond.</div>`;
      }

      container.innerHTML = html;
    }

    function renderSticker(s) {
      const st = getSticker(s.code);
      const classes = ['sticker'];
      if (st.owned) classes.push('owned');
      if (st.dupes > 0) classes.push('has-dupes');

      return `
    <div class="${classes.join(' ')}" data-code="${s.code}" onclick="toggleOwned('${s.code}', event)">
      <div class="sticker-num">${s.num}</div>
      <div class="sticker-code">${s.teamCode}</div>
      <div class="dupe-controls" onclick="event.stopPropagation()">
        <button class="dupe-btn" onclick="changeDupes('${s.code}', -1)">−</button>
        <span class="dupe-count">${st.dupes}</span>
        <button class="dupe-btn" onclick="changeDupes('${s.code}', 1)">+</button>
      </div>
    </div>
  `;
    }

    // ============================================================
    //  ACTIONS
    // ============================================================
    function toggleTeam(code) {
      if (openTeams.has(code)) openTeams.delete(code);
      else openTeams.add(code);
      renderTeams();
    }

    function toggleOwned(code, ev) {
      if (!currentUser) return;
      const st = getSticker(code);
      const newOwned = !st.owned;
      setSticker(code, {
        owned: newOwned,
        dupes: newOwned ? st.dupes : 0
      });

      const el = ev.currentTarget;
      if (newOwned) {
        el.classList.add('owned');
        toast(`+1 ${code}`);
      } else {
        el.classList.remove('owned', 'has-dupes');
      }
      updateProgress();
      refreshTeamHeader(code);
    }

    function changeDupes(code, delta) {
      if (!currentUser) return;
      const st = getSticker(code);
      if (!st.owned) {
        if (delta > 0) {
          setSticker(code, { owned: true, dupes: 0 });
        } else return;
      }
      const newDupes = Math.max(0, (st.dupes || 0) + delta);
      setSticker(code, { owned: true, dupes: newDupes });

      const el = document.querySelector(`.sticker[data-code="${code}"]`);
      if (el) {
        el.classList.toggle('has-dupes', newDupes > 0);
        el.classList.add('owned');
        el.querySelector('.dupe-count').textContent = newDupes;
      }
      updateProgress();
      refreshTeamHeader(code);
    }

    function refreshTeamHeader(stickerCode) {
      // retrouver le team code
      const sticker = ALL_STICKERS.find(s => s.code === stickerCode);
      if (!sticker) return;
      const teamCode = sticker.teamCode;
      const teamEl = document.querySelector(`.team[data-team="${teamCode}"]`);
      if (!teamEl) return;
      const teamStickers = ALL_STICKERS.filter(s => s.teamCode === teamCode);
      const ownedCount = teamStickers.filter(s => getSticker(s.code).owned).length;
      const isComplete = ownedCount === teamStickers.length;
      const progEl = teamEl.querySelector('.team-progress');
      progEl.textContent = `${ownedCount}/${teamStickers.length}${isComplete ? ' ✓' : ''}`;
      progEl.classList.toggle('complete', isComplete);
    }

    function toast(msg) {
      const el = document.getElementById('toast');
      el.textContent = msg;
      el.classList.add('show');
      clearTimeout(toast._t);
      toast._t = setTimeout(() => el.classList.remove('show'), 1200);
    }

    // ============================================================
    //  ÉVÉNEMENTS
    // ============================================================
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.filter;
        renderTeams();
      });
    });

    document.getElementById('search').addEventListener('input', (e) => {
      searchTerm = e.target.value.trim();
      renderTeams();
    });

    document.getElementById('resetBtn').addEventListener('click', async () => {
      if (!currentUser) return;
      if (!confirm('Tout effacer ? Cette action est irréversible.')) return;

      toast('Suppression en cours…');
      try {
        // supprime chaque doc un par un (pas de batch delete sur l'arborescence en client)
        const codes = Object.keys(state);
        for (const code of codes) {
          await window.fb.deleteDoc(stickerDocRef(code));
        }
        state = {};
        openTeams.clear();
        updateProgress();
        renderTeams();
        toast('Collection réinitialisée');
      } catch (e) {
        console.error(e);
        toast('Erreur lors de la suppression');
      }
    });

    document.getElementById('signInBtn').addEventListener('click', signIn);
    document.getElementById('signOutBtn').addEventListener('click', signOutUser);

    // ============================================================
    //  RENDU BUDGET
    // ============================================================
    function fmt(n) {
      return Number(n).toFixed(2).replace('.', '.');
    }

    function renderBudget() {
      const totalPacks = purchases.reduce((s, p) => s + (p.packs || 0), 0);
      const totalSpent = purchases.reduce((s, p) => s + (p.price || 0), 0);
      const avgPack = totalPacks > 0 ? totalSpent / totalPacks : 0;
      const stickersBought = totalPacks * 5;
      const avgSticker = stickersBought > 0 ? totalSpent / stickersBought : 0;

      document.getElementById('budgetTotal').textContent = fmt(totalSpent);
      document.getElementById('budgetPacks').textContent = totalPacks;
      document.getElementById('budgetAvgPack').textContent = fmt(avgPack);
      document.getElementById('budgetStickersBought').textContent = stickersBought;
      document.getElementById('budgetAvgSticker').textContent = fmt(avgSticker);

      // Liste des achats
      const container = document.getElementById('purchasesContainer');
      if (purchases.length === 0) {
        container.innerHTML = '<div class="purchases-empty">Aucun achat enregistré pour le moment.<br>Ajoute ton premier paquet ci-dessus 🎁</div>';
        return;
      }

      container.innerHTML = purchases.map(p => {
        const d = new Date(p.date || 0);
        const dateStr = d.toLocaleDateString('fr-CH', { day: '2-digit', month: 'short', year: 'numeric' });
        const unitPrice = p.packs > 0 ? (p.price / p.packs) : 0;
        return `
      <div class="purchase-item">
        <div class="purchase-packs">${p.packs}</div>
        <div class="purchase-info">
          <div class="purchase-amount">${fmt(p.price)} CHF</div>
          <div class="purchase-date">${dateStr}</div>
        </div>
        <div class="purchase-unit">${fmt(unitPrice)} CHF<br>/ paquet</div>
        <button class="delete-purchase" onclick="confirmDeletePurchase('${p.id}')" aria-label="Supprimer">×</button>
      </div>
    `;
      }).join('');
    }

    window.confirmDeletePurchase = function (id) {
      if (confirm('Supprimer cet achat ?')) {
        deletePurchase(id);
      }
    };

    // ============================================================
    //  VUE ALBUM
    // ============================================================
    // On construit la liste des "pages" : 1 par équipe + 1 par section spéciale
    const ALBUM_PAGES = [
      ...TEAMS.map(t => ({
        type: 'team', pageType: 'spread',
        code: t.code, name: t.name, group: t.group, flag: t.flag, c1: t.c1, c2: t.c2,
        stickers: ALL_STICKERS.filter(s => s.teamCode === t.code)
      })),
      ...SPECIAL_SECTIONS.map(s => ({
        type: 'special', pageType: 'special',
        code: s.code, name: s.name, group: null, flag: '⭐',
        c1: '#e3173e', c2: '#f5b400', special: true,
        stickers: ALL_STICKERS.filter(st => st.teamCode === s.code)
      }))
    ];

    // Éclaircit/assombrit une couleur hex de pct (%)
    function shade(hex, pct) {
      const h = hex.replace('#', '');
      let r = parseInt(h.substr(0, 2), 16), g = parseInt(h.substr(2, 2), 16), b = parseInt(h.substr(4, 2), 16);
      const adj = (c) => Math.max(0, Math.min(255, Math.round(c + (c * pct / 100))));
      r = adj(r); g = adj(g); b = adj(b);
      return '#' + [r, g, b].map(c => c.toString(16).padStart(2, '0')).join('');
    }

    function isLightColor(hex) {
      const h = hex.replace('#', '');
      const r = parseInt(h.substr(0, 2), 16), g = parseInt(h.substr(2, 2), 16), b = parseInt(h.substr(4, 2), 16);
      return (0.299 * r + 0.587 * g + 0.114 * b) > 180;
    }

    // Construit le SVG d'un blason aux couleurs de l'équipe.
    function crestSVG(c1, c2, num, uid) {
      const stroke = isLightColor(c1) ? '#0a1628' : 'rgba(255,255,255,.4)';
      const numColor = isLightColor(c1) ? '#0a1628' : '#ffffff';
      return `
    <svg viewBox="0 0 100 116" xmlns="http://www.w3.org/2000/svg" class="crest-svg">
      <defs>
        <linearGradient id="g${uid}" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="${c1}"/>
          <stop offset="100%" stop-color="${shade(c1, -20)}"/>
        </linearGradient>
      </defs>
      <path d="M6 8 L94 8 L94 64 Q94 96 50 112 Q6 96 6 64 Z"
            fill="url(#g${uid})" stroke="${stroke}" stroke-width="3"/>
      <path d="M6 8 L94 8 L94 30 L6 30 Z" fill="${c2}" opacity="0.92"/>
      <path d="M50 42 L76 56 L76 74 L50 90 L24 74 L24 56 Z"
            fill="${c2}" opacity="0.25"/>
      <text x="50" y="76" text-anchor="middle"
            font-family="Georgia, serif" font-weight="900" font-size="36"
            fill="${numColor}">${num}</text>
    </svg>
  `;
    }

    let albumCurrentPage = 0;
    let albumModalCode = null;  // code du sticker en cours d'édition dans la modale

    function buildAlbum() {
      const track = document.getElementById('albumTrack');
      document.getElementById('albumPageTotal').textContent = ALBUM_PAGES.length;

      track.innerHTML = ALBUM_PAGES.map((page, idx) => {
        const total = page.stickers.length;
        if (page.pageType === 'spread') {
          const left = page.stickers.slice(0, 10);
          const right = page.stickers.slice(10);
          return `
    <div class="album-page" data-page="${idx}">
      <div class="album-page-card album-page-card--spread">
        <div class="album-flag-bg">${page.flag}</div>
        <div class="album-page-top">
          <div class="album-flag-small">${page.flag}</div>
          <div class="album-team-info">
            <div class="album-team-name">${page.name}</div>
            <div class="album-team-meta">${page.group ? 'Groupe ' + page.group + ' · ' : ''}${page.code}</div>
          </div>
          <div class="album-team-progress" data-page-progress="${idx}">
            <div class="frac">0/${total}</div>
            <div class="pct">0%</div>
          </div>
        </div>
        <div class="album-spread">
          <div class="album-spread-left">
            <div class="album-grid grid-p1">
              <div class="album-flag-img">
                <img src="flags/${page.code}.png" alt="${page.name}" onerror="this.style.opacity='0'">
              </div>
              ${left.map(s => renderAlbumSlot(s, page)).join('')}
            </div>
          </div>
          <div class="album-spread-right">
            <div class="album-grid grid-p2">
              ${right.map(s => renderAlbumSlot(s, page)).join('')}
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
        } else {
          return `
    <div class="album-page special" data-page="${idx}">
      <div class="album-page-card">
        <div class="album-flag-bg">${page.flag}</div>
        <div class="album-page-top">
          <div class="album-flag-small">${page.flag}</div>
          <div class="album-team-info">
            <div class="album-team-name">${page.name}</div>
            <div class="album-team-meta">${page.code}</div>
          </div>
          <div class="album-team-progress" data-page-progress="${idx}">
            <div class="frac">0/${total}</div>
            <div class="pct">0%</div>
          </div>
        </div>
        <div class="album-grid grid-special">
          ${page.stickers.map(s => renderAlbumSlot(s, page)).join('')}
        </div>
      </div>
    </div>
  `;
        }
      }).join('');

      // Dots de navigation
      const dots = document.getElementById('albumDots');
      if (dots) {
        dots.innerHTML = ALBUM_PAGES.map((_, i) =>
          `<div class="album-dot" data-dot="${i}" onclick="goToAlbumPage(${i})"></div>`
        ).join('');
      }

      refreshAllAlbumPages();
      goToAlbumPage(albumCurrentPage, false);
    }

    function renderAlbumSlot(s, page) {
      const uid = s.code.replace(/[^a-zA-Z0-9]/g, '');
      const crest = crestSVG(page.c1, page.c2, s.num, uid);
      return `
    <div class="album-slot" data-code="${s.code}" onclick="openAlbumModal('${s.code}')">
      <div class="album-slot-crest">${crest}</div>
      <img class="album-slot-photo" src="photos/${s.teamCode}/${s.num}.png" alt="" onerror="this.style.display='none'">
      <div class="album-slot-num">${s.num}</div>
      <div class="album-slot-code">${s.teamCode}</div>
      <div class="album-slot-dupe-badge"><span class="dupe-val">0</span></div>
    </div>
  `;
    }

    // Met à jour visuellement un slot précis
    function refreshAlbumSlot(code) {
      const slot = document.querySelector(`.album-slot[data-code="${code}"]`);
      if (!slot) return;
      const st = getSticker(code);
      slot.classList.toggle('owned', !!st.owned);
      slot.classList.toggle('has-dupes', (st.dupes || 0) > 0);
      const badge = slot.querySelector('.album-slot-dupe-badge .dupe-val');
      if (badge) badge.textContent = st.dupes || 0;
    }

    // Rafraîchit progress + dots de toutes les pages
    function refreshAllAlbumPages() {
      ALBUM_PAGES.forEach((page, idx) => {
        const owned = page.stickers.filter(s => getSticker(s.code).owned).length;
        const total = page.stickers.length;
        const pct = Math.round((owned / total) * 100);
        const complete = owned === total;

        const progEl = document.querySelector(`[data-page-progress="${idx}"]`);
        if (progEl) {
          progEl.querySelector('.frac').textContent = `${owned}/${total}${complete ? ' ✓' : ''}`;
          progEl.querySelector('.pct').textContent = `${pct}%`;
          progEl.classList.toggle('complete', complete);
        }

        const dot = document.querySelector(`.album-dot[data-dot="${idx}"]`);
        if (dot) dot.classList.toggle('complete', complete);

        // Rafraîchir chaque slot de la page
        page.stickers.forEach(s => refreshAlbumSlot(s.code));
      });
    }

    function goToAlbumPage(idx, animate = true) {
      albumCurrentPage = Math.max(0, Math.min(ALBUM_PAGES.length - 1, idx));
      const track = document.getElementById('albumTrack');
      if (!animate) track.classList.add('dragging');
      track.style.transform = `translateX(-${albumCurrentPage * 100}%)`;
      if (!animate) {
        // re-enable transition après le repaint
        requestAnimationFrame(() => requestAnimationFrame(() => track.classList.remove('dragging')));
      }

      const page = ALBUM_PAGES[albumCurrentPage];
      document.getElementById('albumPageCurrent').textContent = albumCurrentPage + 1;
      document.getElementById('albumPageName').textContent = page.name;

      document.querySelectorAll('.album-dot').forEach((d, i) => {
        d.classList.toggle('active', i === albumCurrentPage);
      });

      // Scroll auto sur la liste de dots si elle déborde
      const activeDot = document.querySelector('.album-dot.active');
      if (activeDot) activeDot.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });

      document.getElementById('albumPrev').disabled = albumCurrentPage === 0;
      document.getElementById('albumNext').disabled = albumCurrentPage === ALBUM_PAGES.length - 1;
    }

    window.goToAlbumPage = goToAlbumPage;

    // ---------- Index des pages ----------
    function openAlbumIndex() {
      const list = document.getElementById('albumIndexList');
      let html = '';
      let currentGroup = null;

      ALBUM_PAGES.forEach((page, idx) => {
        const groupLabel = page.group ? 'Groupe ' + page.group : 'Sections spéciales';
        if (groupLabel !== currentGroup) {
          html += `<div class="album-index-group">${groupLabel}</div>`;
          currentGroup = groupLabel;
        }
        const owned = page.stickers.filter(s => getSticker(s.code).owned).length;
        const total = page.stickers.length;
        const pct = Math.round((owned / total) * 100);
        const complete = owned === total;
        const isCurrent = idx === albumCurrentPage;
        html += `
          <button class="album-index-item${isCurrent ? ' current' : ''}" onclick="goToAlbumPage(${idx}); closeAlbumIndex();">
            <div class="album-index-flag">${page.flag}</div>
            <div class="album-index-info">
              <div class="album-index-name">${page.name}</div>
              <div class="album-index-pct${complete ? ' complete' : ''}">${owned}/${total} — ${pct}%${complete ? ' ✓' : ''}</div>
            </div>
          </button>`;
      });

      list.innerHTML = html;
      document.getElementById('albumIndexModal').classList.add('open');
    }

    function closeAlbumIndex() {
      document.getElementById('albumIndexModal').classList.remove('open');
    }

    window.closeAlbumIndex = closeAlbumIndex;

    // ---------- Swipe ----------
    let touchStartX = 0, touchStartY = 0, touchDelta = 0, isDragging = false, dragStartTime = 0;

    function setupAlbumSwipe() {
      const viewport = document.getElementById('albumViewport');
      const track = document.getElementById('albumTrack');

      function onStart(x, y) {
        touchStartX = x;
        touchStartY = y;
        touchDelta = 0;
        isDragging = false;
        dragStartTime = Date.now();
      }
      function onMove(x, y) {
        const dx = x - touchStartX;
        const dy = y - touchStartY;
        if (!isDragging) {
          // confirmer un swipe horizontal seulement si le mvt H domine
          if (Math.abs(dx) > 10 && Math.abs(dx) > Math.abs(dy)) {
            isDragging = true;
            track.classList.add('dragging');
          } else if (Math.abs(dy) > 10) {
            return; // c'est un scroll vertical
          }
        }
        if (isDragging) {
          touchDelta = dx;
          const w = viewport.offsetWidth;
          const offset = -albumCurrentPage * 100 + (dx / w) * 100;
          track.style.transform = `translateX(${offset}%)`;
        }
      }
      function onEnd() {
        if (!isDragging) return;
        track.classList.remove('dragging');
        const w = viewport.offsetWidth;
        const elapsed = Date.now() - dragStartTime;
        // seuil : 25% de la largeur OU swipe rapide (>500px/s)
        const velocity = Math.abs(touchDelta) / Math.max(elapsed, 1);
        const isQuick = velocity > 0.5;
        const threshold = isQuick ? 30 : w * 0.25;
        if (touchDelta < -threshold && albumCurrentPage < ALBUM_PAGES.length - 1) {
          goToAlbumPage(albumCurrentPage + 1);
        } else if (touchDelta > threshold && albumCurrentPage > 0) {
          goToAlbumPage(albumCurrentPage - 1);
        } else {
          goToAlbumPage(albumCurrentPage);
        }
        isDragging = false;
        touchDelta = 0;
      }

      // Touch
      viewport.addEventListener('touchstart', (e) => {
        onStart(e.touches[0].clientX, e.touches[0].clientY);
      }, { passive: true });
      viewport.addEventListener('touchmove', (e) => {
        onMove(e.touches[0].clientX, e.touches[0].clientY);
      }, { passive: true });
      viewport.addEventListener('touchend', onEnd);

      // Mouse (pour test desktop)
      let mouseDown = false;
      viewport.addEventListener('mousedown', (e) => {
        mouseDown = true;
        onStart(e.clientX, e.clientY);
      });
      viewport.addEventListener('mousemove', (e) => {
        if (mouseDown) onMove(e.clientX, e.clientY);
      });
      viewport.addEventListener('mouseup', () => { mouseDown = false; onEnd(); });
      viewport.addEventListener('mouseleave', () => { if (mouseDown) { mouseDown = false; onEnd(); } });

      // Boutons navigation
      document.getElementById('albumPrev').addEventListener('click', () => goToAlbumPage(albumCurrentPage - 1));
      document.getElementById('albumNext').addEventListener('click', () => goToAlbumPage(albumCurrentPage + 1));
      document.getElementById('albumIndexBtn').addEventListener('click', openAlbumIndex);

      // Clavier
      document.addEventListener('keydown', (e) => {
        if (document.getElementById('view-album').classList.contains('active')) {
          if (e.key === 'ArrowLeft') goToAlbumPage(albumCurrentPage - 1);
          if (e.key === 'ArrowRight') goToAlbumPage(albumCurrentPage + 1);
        }
      });
    }

    // ---------- Modale d'action sticker ----------
    function openAlbumModal(code) {
      if (!currentUser) return;
      albumModalCode = code;
      const sticker = ALL_STICKERS.find(s => s.code === code);
      if (!sticker) return;
      const page = ALBUM_PAGES.find(p => p.code === sticker.teamCode);
      const flag = page ? page.flag : '⭐';
      const st = getSticker(code);

      document.getElementById('modalFlag').textContent = flag;
      document.getElementById('modalTitle').textContent = `${sticker.teamCode} ${sticker.num}`;
      document.getElementById('modalSub').textContent = page ? page.name : '';
      updateAlbumModalContent();
      document.getElementById('albumModal').classList.add('show');
    }
    window.openAlbumModal = openAlbumModal;

    function updateAlbumModalContent() {
      if (!albumModalCode) return;
      const st = getSticker(albumModalCode);
      const toggleBtn = document.getElementById('modalToggleOwn');
      const toggleLabel = document.getElementById('modalToggleLabel');
      const dupesBtn = document.getElementById('modalDupesBtn');
      const dupeCount = document.getElementById('modalDupeCount');

      if (st.owned) {
        toggleLabel.textContent = 'Retirer de ma collection';
        toggleBtn.classList.remove('primary');
        toggleBtn.classList.add('danger');
        dupesBtn.style.display = 'flex';
        dupeCount.textContent = st.dupes || 0;
      } else {
        toggleLabel.textContent = 'Marquer comme obtenu';
        toggleBtn.classList.add('primary');
        toggleBtn.classList.remove('danger');
        dupesBtn.style.display = 'none';
      }
    }

    function closeAlbumModal() {
      document.getElementById('albumModal').classList.remove('show');
      albumModalCode = null;
    }
    window.closeAlbumModal = closeAlbumModal;

    document.getElementById('albumModal').addEventListener('click', (e) => {
      if (e.target.id === 'albumModal') closeAlbumModal();
    });

    document.getElementById('modalToggleOwn').addEventListener('click', () => {
      if (!albumModalCode) return;
      const st = getSticker(albumModalCode);
      const newOwned = !st.owned;
      setSticker(albumModalCode, {
        owned: newOwned,
        dupes: newOwned ? st.dupes : 0
      });
      refreshAlbumSlot(albumModalCode);
      refreshAllAlbumPages();
      updateProgress();
      updateAlbumModalContent();
      if (newOwned) toast(`+1 ${albumModalCode}`);
    });

    window.modalChangeDupes = function (delta) {
      if (!albumModalCode) return;
      const st = getSticker(albumModalCode);
      if (!st.owned) return;
      const newDupes = Math.max(0, (st.dupes || 0) + delta);
      setSticker(albumModalCode, { owned: true, dupes: newDupes });
      refreshAlbumSlot(albumModalCode);
      refreshAllAlbumPages();
      updateProgress();
      updateAlbumModalContent();
    };

    // ============================================================
    //  TABS
    // ============================================================
    document.querySelectorAll('.tab').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
        tab.classList.add('active');
        document.getElementById('view-' + tab.dataset.view).classList.add('active');
        // Scroll to top quand on change d'onglet
        window.scrollTo({ top: 0, behavior: 'instant' });
      });
    });

    // ============================================================
    //  ÉVÉNEMENTS BUDGET
    // ============================================================
    const inputPacks = document.getElementById('inputPacks');
    const inputPrice = document.getElementById('inputPrice');
    const addBtn = document.getElementById('addPurchaseBtn');

    function validateForm() {
      const packs = parseInt(inputPacks.value, 10);
      const price = parseFloat(inputPrice.value);
      const valid = packs > 0 && price >= 0 && !isNaN(packs) && !isNaN(price);
      addBtn.disabled = !valid;
    }
    inputPacks.addEventListener('input', validateForm);
    inputPrice.addEventListener('input', validateForm);
    validateForm();

    addBtn.addEventListener('click', async () => {
      const packs = parseInt(inputPacks.value, 10);
      const price = parseFloat(inputPrice.value);
      if (!(packs > 0) || isNaN(price) || price < 0) return;

      addBtn.disabled = true;
      await addPurchase(packs, price);
      toast(`+${packs} paquet${packs > 1 ? 's' : ''} ajouté${packs > 1 ? 's' : ''}`);

      // reset form
      inputPacks.value = 1;
      inputPrice.value = '';
      validateForm();
      inputPrice.focus();
    });

    // Entrée dans le champ prix → submit
    inputPrice.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !addBtn.disabled) addBtn.click();
    });

    // ============================================================
    //  INIT
    // ============================================================
    // L'init de l'auth déclenche tout le reste via onAuthChange
    updateProgress();
    renderTeams();
    renderBudget();
    buildAlbum();
    setupAlbumSwipe();

    // ============================================================
    //  GESTION ONLINE / OFFLINE
    // ============================================================
    function updateOnlineStatus() {
      const bar = document.getElementById('offlineBar');
      if (!bar) return;
      if (navigator.onLine) {
        bar.classList.remove('show');
      } else {
        bar.classList.add('show');
      }
    }
    window.addEventListener('online', () => { updateOnlineStatus(); toast('De retour en ligne'); });
    window.addEventListener('offline', () => { updateOnlineStatus(); toast('Mode hors-ligne'); });
    updateOnlineStatus();

    // ============================================================
    //  SERVICE WORKER (cache de l'app pour hors-ligne)
    // ============================================================
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then(reg => console.log('✓ Service Worker registered:', reg.scope))
          .catch(err => console.warn('Service Worker registration failed:', err));
      });
    }