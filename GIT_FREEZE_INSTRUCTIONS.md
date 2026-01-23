# GIT FREEZE INSTRUCTIONS

**Purpose**: Lock this demo version so it can be safely shared

---

## STEP 1: Create the freeze branch

```bash
git checkout -b demo-freeze-v1
```

## STEP 2: Commit the demo

```bash
git add .
git commit -m "🔒 DEMO FREEZE v1.0 - Institutional pilot ready

- Replaced emoji icons with Lucide (professional)
- Official NEXORA colors locked (#0B0B0B, #FF6A00, greys)
- All interactions working (dashboard, filters, navigation)
- Mock data only (no backend)
- Ready for college demonstrations

See: DEMO_FREEZE.md for details"
```

## STEP 3: Tag it

```bash
git tag -a v0.1-demo -m "Nexora Demo Freeze v1.0 - Institutional Pilot"
```

## STEP 4: Lock it

```bash
git push origin demo-freeze-v1 --tags
```

## STEP 5: Protect it (GitHub)

In GitHub repository settings:

1. Go to **Settings** → **Branches**
2. Add rule for `demo-freeze-v1`
3. Require pull request review before merge
4. Set "Dismiss stale PR approvals" OFF
5. Set "Require code owner review" ON (if applicable)

---

## Result

This branch is now:
* ✅ Frozen for demos
* ✅ Tagged as v0.1
* ✅ Protected from accidental changes
* ✅ Safe to share with colleges

---

## When making changes

**Always work on a NEW branch**:

```bash
git checkout demo-freeze-v1
git checkout -b feature/add-backend

# Make changes...

git commit -m "Feature: Add Express.js backend"
git push origin feature/add-backend

# Create PR to main (not demo-freeze-v1)
```

---

## NEVER do this on demo-freeze-v1

❌ `git commit` (without approval)  
❌ `git push` (without PR review)  
❌ `git rebase` (changes history)  
❌ `git merge` (uncontrolled changes)  

---

**Status**: Ready to freeze  
**Command**: `git checkout -b demo-freeze-v1 && git commit && git tag`
