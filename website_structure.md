# Delicate Repair — Website Structure & Design Document

> **Purpose:** This document is a complete, LLM-readable blueprint of the Delicate Repair therapy website. It describes every page, section, content block, navigation link, internal hyperlink, color palette, typography, and design intent. **Content is preserved verbatim from the source file** (`website_content_loose.md`). No content has been altered.

---

## TABLE OF CONTENTS

1. [Brand Identity](#1-brand-identity)
2. [Color Palette](#2-color-palette)
3. [Typography](#3-typography)
4. [Design Tokens & Visual Language](#4-design-tokens--visual-language)
5. [Site Map & Navigation Structure](#5-site-map--navigation-structure)
6. [Page Layouts & Content](#6-page-layouts--content)
   - [Page 1 — Home](#page-1--home)
   - [Page 2 — About Me](#page-2--about-me)
   - [Page 3 — What We Help With (Specialties)](#page-3--what-we-help-with-specialties)
   - [Page 4 — Therapy Approaches](#page-4--therapy-approaches)
   - [Page 5 — Disorders Deep-Dive Pages](#page-5--disorders-deep-dive-pages)
   - [Page 6 — Book a Session / Contact](#page-6--book-a-session--contact)
   - [Page 7 — Learn More / Resources](#page-7--learn-more--resources)
7. [Internal Hyperlink Map](#7-internal-hyperlink-map)
8. [CTA Logic](#8-cta-logic)

---

## 1. Brand Identity

| Property          | Value                                                                                                                                                                                                                                                                                                   |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Brand Name**    | Delicate Repair                                                                                                                                                                                                                                                                                         |
| **Tagline**       | _"Pain is real and sometimes dark, but it can be carried. You don't have to carry that all alone anymore."_                                                                                                                                                                                             |
| **Brand Story**   | The name _Delicate Repair_ represents the belief that true healing isn't forged in forceful battles, but in the delicate mending of what's been fractured. Like the deer in the logo that wears thorns as scars — from the same thorns, roses bloom, showing resilience birthing from survival's grace. |
| **Logo Concept**  | A deer wearing thorns (representing old wounds carried), with roses blooming from those same thorns (resilience from survival).                                                                                                                                                                         |
| **Tone of Voice** | Warm, gentle, non-judgmental, poetic, clinically grounded, compassionate                                                                                                                                                                                                                                |
| **Founder**       | Khushi (she/her), trauma-informed therapist based in India                                                                                                                                                                                                                                              |
| **Practice Type** | Private therapy practice — Individual, Couples, and Family sessions                                                                                                                                                                                                                                     |

---

## 2. Color Palette

> These colors are derived from the brand metaphor: thorns → roses → deer → healing. Earthy, muted, and warm — evoking safety, nature, and emotional depth.

### Primary Palette

| Role                 | Color Name     | Hex       | Description                                                            |
| -------------------- | -------------- | --------- | ---------------------------------------------------------------------- |
| **Brand Primary**    | Dusty Rose     | `#C9897A` | Warm muted rose — the blooming rose from thorns; warmth and healing    |
| **Brand Secondary**  | Sage Green     | `#8FAF8E` | Soft green — nature, calm, growth, the deer in the forest              |
| **Dark Accent**      | Deep Espresso  | `#2C1F1A` | Very dark warm brown — grounding, depth, the weight of what is carried |
| **Light Background** | Warm Cream     | `#FAF5EE` | Soft off-white warm cream — the safe space, stillness                  |
| **Mid Background**   | Linen Sand     | `#EDE0D1` | Warm light beige — gentle transition, soft sections                    |
| **Text Primary**     | Warm Charcoal  | `#3D2E28` | Dark warm brown — readable but softer than black                       |
| **Text Secondary**   | Muted Taupe    | `#8A7060` | Medium warm brown — subheadings, captions                              |
| **CTA Button**       | Dusty Blush    | `#B5645A` | Slightly deeper rose — for "Book a Session" buttons                    |
| **CTA Hover**        | Deep Rose      | `#8F3F36` | Darker on hover                                                        |
| **Link Color**       | Sage Underline | `#6B967A` | Internal hyperlinks — green-toned for calm discoverability             |
| **Link Hover**       | Deep Sage      | `#4A7058` | On hover                                                               |

### Extended / Accent Colors (use sparingly)

| Role                     | Color Name       | Hex       | Description                                             |
| ------------------------ | ---------------- | --------- | ------------------------------------------------------- |
| **Warm Highlight**       | Amber Whisper    | `#D4AA70` | Soft gold — pull quotes, emphasized text                |
| **Cool Accent**          | Dusky Lavender   | `#B2A4C7` | Lavender — LGBTQ+ affirmative section, identity content |
| **Danger/Warning**       | Muted Terracotta | `#C17A5C` | For important notices (not red — keeps the warmth)      |
| **Success/Confirmation** | Soft Moss        | `#7A9E7E` | Form confirmation, booking success                      |

---

## 3. Typography

| Role                        | Font Family                      | Weight      | Size (desktop) | Size (mobile) |
| --------------------------- | -------------------------------- | ----------- | -------------- | ------------- |
| **Hero Headline**           | `Cormorant Garamond` (serif)     | 300–400     | `52–64px`      | `32–40px`     |
| **Section Heading (H2)**    | `Cormorant Garamond`             | 500         | `36px`         | `28px`        |
| **Sub-Heading (H3)**        | `Jost` or `DM Sans` (sans-serif) | 500         | `20px`         | `18px`        |
| **Body Text**               | `Jost` or `DM Sans`              | 400         | `17px`         | `16px`        |
| **Captions / Labels**       | `Jost`                           | 400, italic | `13px`         | `13px`        |
| **CTA Button Text**         | `Jost`                           | 600         | `15px`         | `15px`        |
| **Blockquote / Pull Quote** | `Cormorant Garamond`             | 400, italic | `22px`         | `18px`        |

> **Font Source:** Google Fonts — both `Cormorant Garamond` and `Jost` are free and load fast.

---

## 4. Design Tokens & Visual Language

| Token                         | Value                                                       |
| ----------------------------- | ----------------------------------------------------------- |
| **Border Radius (cards)**     | `16px`                                                      |
| **Border Radius (buttons)**   | `50px` (pill shape)                                         |
| **Section Padding (desktop)** | `100px 80px`                                                |
| **Section Padding (mobile)**  | `60px 24px`                                                 |
| **Card Shadow**               | `0 4px 24px rgba(44,31,26,0.08)`                            |
| **Max Content Width**         | `1100px`                                                    |
| **Animation Style**           | Gentle fade-in on scroll (no jarring movements)             |
| **Image Style**               | Softly lit, warm-toned photography; botanical/nature motifs |
| **Dividers**                  | Thin `1px` lines in `#EDE0D1`; or botanical SVG dividers    |
| **Background Texture**        | Subtle linen/paper grain texture on cream sections          |

---

## 5. Site Map & Navigation Structure

```
Delicate Repair
│
├── Home                         → /
├── About Me                     → /about
├── What We Help With            → /specialties
│   ├── Trauma                   → /specialties/trauma
│   ├── Anxiety                  → /specialties/anxiety
│   ├── Depression               → /specialties/depression
│   ├── Eating Disorders         → /specialties/eating-disorders
│   ├── Addiction                → /specialties/addiction
│   ├── Couples Therapy          → /specialties/couples-therapy
│   ├── C-PTSD                   → /specialties/c-ptsd
│   ├── Abuse (Sexual/Emotional/Physical) → /specialties/abuse
│   ├── Enmeshment Trauma        → /specialties/enmeshment-trauma
│   ├── LGBTQ+ Affirmative       → /specialties/lgbtq
│   ├── Mood Disorders           → /specialties/mood-disorders
│   ├── Relationships & Family   → /specialties/relationships
│   └── Boundaries/Communication → /specialties/boundaries
│
├── Therapy Approaches           → /approaches
│   ├── EMDR                     → /approaches/emdr
│   └── Internal Family Systems  → /approaches/ifs
│
├── Book a Session               → /book
│   ├── Individual               → /book#individual
│   ├── Family                   → /book#family
│   └── Relationship/Couples     → /book#couples
│
└── Learn More / Resources       → /learn
    ├── FAQs                     → /learn#faqs
    ├── Session Guidelines       → /learn#guidelines
    ├── Client Testimonials      → /learn#testimonials
    ├── Contact                  → /learn#contact
    └── Privacy + Terms          → /learn#privacy
```

### Navigation Bar Structure

| Nav Item           | URL            | Dropdown?                         |
| ------------------ | -------------- | --------------------------------- |
| Home               | `/`            | No                                |
| About              | `/about`       | No                                |
| What We Help With  | `/specialties` | Yes — disorder sub-pages          |
| Therapy Approaches | `/approaches`  | Yes — EMDR, IFS                   |
| Book a Session     | `/book`        | No — CTA button style             |
| Learn More         | `/learn`       | Yes — FAQs, Testimonials, Contact |

---

## 6. Page Layouts & Content

---

### Page 1 — Home

**URL:** `/`
**Purpose:** Gentle first impression. Establish emotional resonance, introduce the therapist's philosophy, list who they help, and lead to booking.

---

#### Section 1.1 — Hero (Gentle Intro)

> **Layout:** Full-width, centered text, nature/botanical imagery or soft gradient background.

**Headline (H1):**

> _"Pain is real and sometimes dark, but it can be carried. You don't have to carry that all alone anymore."_

**Body Copy:**

> Pain doesn't always announce itself loudly. Sometimes it lives in the tightness of your chest before a difficult conversation, in the patterns you can't seem to break, in the way your body remembers what your mind tries hard to not remember.

> You might be here because you're tired of managing symptoms that look like getting sick often or breaking into a rash/hives, anxiety that makes it hard to function, exhaustion that never goes away, rage that at times feels consuming, disconnection from yourself/others and confusion about why you abandon yourself in relationships. Or maybe you've done some healing already, but you know there are deeper layers waiting to be held.

> Whatever brought you here, I'm glad you're listening to that quiet voice that says something can be different.

> I work with trauma by moving through it rather than around it without re-traumatising, to dismantle the beliefs that keep them small, to restore belongingness and connection with yourself, process suppressed emotions and shift from self-blame to understand trauma, as Dr. Gabor Mate quotes, _"trauma is a self-regulation issue."_

> This work is delicate, yes. But it's also powerful. Together, we'll create a space where your nervous system can finally exhale, where there is space for curiosity about the origins of these big confusing feelings without judgement.

> You deserve more than just management.

**CTA Button:** `Book a Session` → links to `/book`

---

#### Section 1.2 — "I Work With People Navigating:"

> **Layout:** 2-column list or horizontally-scrollable pill tags on mobile.

Each item in the list is a **clickable hyperlink** that routes to its specialty page:

| List Item                           | Links To                                                      |
| ----------------------------------- | ------------------------------------------------------------- |
| Addiction                           | [`/specialties/addiction`](#addiction-deep-dive)              |
| C-PTSD                              | [`/specialties/c-ptsd`](#c-ptsd-deep-dive)                    |
| Eating Disorder                     | [`/specialties/eating-disorders`](#eating-disorder-deep-dive) |
| Abuse (Sexual, Emotional, Physical) | [`/specialties/abuse`](#abuse-deep-dive)                      |
| Relationship and Family Therapy     | [`/specialties/relationships`](#relationships-deep-dive)      |
| Trauma                              | [`/specialties/trauma`](#trauma-deep-dive)                    |
| Depression                          | [`/specialties/depression`](#depression-deep-dive)            |
| Anxiety                             | [`/specialties/anxiety`](#anxiety-deep-dive)                  |
| EMDR/IFS                            | [`/approaches/emdr`](#emdr-deep-dive)                         |
| ACT                                 | [`/approaches/act`](#approaches)                              |
| CBT                                 | [`/approaches/cbt`](#approaches)                              |
| Body Image and Eating Disorders     | [`/specialties/eating-disorders`](#eating-disorder-deep-dive) |
| Enmeshment Trauma                   | [`/specialties/enmeshment-trauma`](#specialties)              |
| LGBTQ Affirmative Therapy           | [`/specialties/lgbtq`](#specialties)                          |
| Mood Disorders                      | [`/specialties/mood-disorders`](#specialties)                 |
| Relationships                       | [`/specialties/relationships`](#relationships-deep-dive)      |
| Boundaries/Communication            | [`/specialties/boundaries`](#specialties)                     |

**CTA Button:** `Book a Session` → `/book`

---

### Page 2 — About Me

**URL:** `/about`
**Purpose:** Build trust. Introduce Khushi, her credentials, philosophy, and personal story about Delicate Repair.

---

#### Section 2.1 — Brand Story (Delicate Repair Introduction)

> **Layout:** Full-width softly-lit panel, founder photo on one side, copy on the other.

**Content:**

> The name _Delicate Repair_ was chosen to represent our belief that true healing isn't forged in forceful battles, but in the delicate mending of what's been fractured. Like the deer in our logo that wears thorns like scars from old wounds it carried but right from the same thorns, there are roses that show resilience birthing from survival's grace. That's you: resilient, beautiful in your scars.

> Our name holds that truth tenderly: healing isn't a storm to battle, but a soft unfolding, petal by petal. Here, in this space, we sit with your story, every part and layer that makes you who you are without rush or fixing, but to listen intentionally, with no-judgement and steady presence because we know the weight of those thorns is real and sometimes dark, but it can be carried.

> We will move through it together, helping those roses bloom from what once wounded without forging, at a gentle pace. You're safe and seen here.

---

#### Section 2.2 — My Introduction (Founder Bio)

**Content:**

> Hi, I'm Khushi (she/her), a trauma-informed therapist based in India and the founder of Delicate Repair therapy. I specialise in helping people heal from trauma, anxiety, attachment wounds, addiction, and the complex emotional patterns that can leave you feeling stuck, overwhelmed, or disconnected from yourself and others.

> My work is grounded in depth, safety, and collaboration. I am trained in EMDR, Internal Family Systems (IFS), CBT and I am a certified trauma-specialist. I also integrate somatic-focused approaches and body-based tools in a way that honours and regulates your nervous system and your pace. I believe that even the parts of you that feel "too much," angry, avoidant, self-critical, or wanting to disappear, are protective in some way. Together, we gently build awareness, emotional regulation, and new ways of relating to yourself and the people in your life.

> At delicate repair, I draw from evidence-based approaches to support clients in:

- Processing traumatic experiences and easing the symptoms that continue to linger
- Building a greater sense of safety in their bodies through nervous system regulation and somatic practices
- Setting and maintaining boundaries without being weighed down by shame or guilt
- Understanding and healing attachment wounds and repetitive relationship patterns
- Making sense of identity shifts, cultural grief, and the complexity of living in the "in-between"
- Moving beyond survival mode toward a life that feels intentional, grounded, and aligned with their values

> Whether you're working through trauma, struggling in relationships, feeling misunderstood, caught in cycles of shame or substance use, or trying to make sense of intense emotions, therapy with me is a space where you don't have to perform or be "fixed." I focus on understanding before changing and change follows from there.

> My goal is to support you in rediscovering your sense of self, direction, and wellbeing — with care that deeply respects where you've been and who you are in the process of becoming, help you build insight and tools, and walk alongside you as you rebuild from the inside out. I'd be glad to connect. This work matters deeply to me, and I hold it with care.

---

#### Section 2.3 — Credentials

> **Layout:** Icon + text list, or clean credential cards.

- Bachelor's in Psychology (Hons.)
- Master's in Applied Psychology (MAAP)
- EMDR Training – EMDR Indian Association
- Cognitive Behavioural Therapy (CBT), ISO Certified
- Trauma-Informed Therapy
- Internal Family Systems

---

#### Section 2.4 — Therapy Philosophy / Modalities

> **Layout:** 3 pill-style cards, each linking to its approach page.

| Modality                                             | Links To                              |
| ---------------------------------------------------- | ------------------------------------- |
| Eye Movement Desensitization and Reprocessing (EMDR) | [`/approaches/emdr`](#emdr-deep-dive) |
| Internal Family Systems (IFS)                        | [`/approaches/ifs`](#ifs-deep-dive)   |
| Cognitive Behavioural Therapy (CBT)                  | [`/approaches/cbt`](#approaches)      |

---

### Page 3 — What We Help With (Specialties)

**URL:** `/specialties`
**Purpose:** Hub page listing all areas of focus. Each item links to its own deep-dive sub-page.

---

#### Section 3.1 — Trauma Healing

Sub-items (listed on hub, each linking to `/specialties/trauma`):

- Childhood Trauma / C-PTSD
- Abuse (Sexual, Physical)
- Emotional/Physical Neglect
- Attachment Trauma
- Religious Shame/Trauma

**→ Link:** [`/specialties/trauma`](#trauma-deep-dive)

---

#### Section 3.2 — Anxiety Disorders

Sub-items:

- Generalized Anxiety
- Social Anxiety
- OCD (Eating Disorder)
- Health Anxiety

**→ Link:** [`/specialties/anxiety`](#anxiety-deep-dive)

---

#### Section 3.3 — Identity and Life Transitions

Sub-items:

- Gender Identity/Sexuality
- LGBTQ+ Issues

**→ Link:** [`/specialties/lgbtq`](#specialties)

---

#### Section 3.4 — Addiction

Sub-items:

- **Substance Abuse** (Alcohol, Opioids, Nicotine)
- **Behavioural Changes** (Sex, Porn, Gaming, Gambling, Shopping, etc.)
- **Impulse Control / Process Addictions** (Compulsive Eating, Exercise, Self Harm)

**→ Link:** [`/specialties/addiction`](#addiction-deep-dive)

---

#### Section 3.5 — Depression

**→ Link:** [`/specialties/depression`](#depression-deep-dive)

---

#### Section 3.6 — Eating Disorders & Body Image

**→ Link:** [`/specialties/eating-disorders`](#eating-disorder-deep-dive)

---

#### Section 3.7 — Couples & Relationship Therapy

**→ Link:** [`/specialties/couples-therapy`](#couples-therapy-deep-dive)

---

### Page 4 — Therapy Approaches

**URL:** `/approaches`
**Purpose:** Explain the therapeutic modalities used. Each approach is a section or sub-page.

---

#### Section 4.1 — EMDR (Eye Movement Desensitization and Reprocessing)

**URL:** `/approaches/emdr`

**Content:**

> EMDR (Eye Movement Desensitization and Reprocessing) is a trauma-focused therapy that helps the brain process distressing experiences that feel "stuck."

> Our brains naturally digest experiences so we can learn from them and move forward. But when something overwhelming happens — trauma, attachment wounds, chronic stress, relational betrayal, accidents, or even repeated subtle invalidation — the nervous system can get overloaded. Instead of being filed away as a completed memory, the experience remains unprocessed.

> That's why present-day triggers can feel disproportionately intense. Your body reacts as if the past is still happening.

> EMDR uses bilateral stimulation (eye movements, tapping, or alternating tones) to activate the brain's natural processing system in a safe, contained environment. With support, your brain is able to reprocess the memory, reduce its emotional charge, and integrate it in a way that feels adaptive rather than overwhelming.

> One of the powerful aspects of EMDR is that you do **not** have to retell your trauma in detail. You won't be asked to narrate your story repeatedly. While you're always welcome to share as much or as little as you want, much of the processing happens internally through images, sensations, emotions, and shifts in belief — not through prolonged verbal recounting.

---

#### Section 4.2 — Internal Family Systems (IFS)

**URL:** `/approaches/ifs`

**Content:**

> Internal Family Systems (IFS) is a powerful therapeutic approach often used in the treatment of complex trauma (C-PTSD), dissociation, and dissociative disorders. IFS is both a theory and a psychotherapy model, and many consider it a paradigm shift in how we understand the mind.

> IFS proposes that each of us has an internal system made up of different parts. These parts can be understood as subpersonalities or inner figures that develop to help us navigate the world. Each part takes on specific roles in an effort to protect us and help us survive.

> Most of us have experienced this internally — saying something like, "A part of me wants to move forward, but another part of me is holding back." At times, we may notice ourselves shifting between different parts depending on the situation or emotional state.

> Through Internal Family Systems, you learn to identify, listen to, and develop compassion for your parts. A core principle of IFS is that there are no bad parts. Every part has a protective intention, even if its strategies feel disruptive or extreme.

> By understanding and working with your internal system in this way, you can gain clarity about your symptoms, patterns, and inner conflicts — and begin moving toward greater internal balance and self-leadership.

---

### Page 5 — Disorders Deep-Dive Pages

Each disorder listed below is a **dedicated sub-page** under `/specialties/[slug]`. Users land here from the Home page list, the Specialties hub, or in-text hyperlinks.

---

#### Trauma Deep-Dive

**URL:** `/specialties/trauma`

**What is Trauma?**

> Trauma is not your fault.
> If someone hurt you, neglected you, or if something overwhelming happened that changed how you see yourself or the world — that responsibility is not yours to carry.

> Trauma can leave you feeling alone, unsure who to turn to, or even questioning whether healing is possible. You might feel empty, disoriented, hypervigilant, numb, or afraid. Sometimes it feels like everything has shifted, and you don't know where to begin.

> You don't need to have all the answers to start healing. Your life does not have to remain defined by what happened. Recovery is possible, and you don't have to do it alone.

**Major Traumatic Events May Include:**

- Emotional, physical, or sexual abuse
- Sudden death or suicide of a loved one
- Experiencing or witnessing violence
- Motor vehicle accidents
- Medical trauma, diagnosis, or surgery
- Natural disasters
- Acts of terrorism

**Chronic or Complex Trauma May Include:**

- Growing up with emotionally unavailable caregivers
- Having a parent or caregiver with an undiagnosed mental illness
- Parental separation or divorce
- Frequent relocation or instability
- Loss of loved ones
- Bullying or cyberbullying
- Living with an undiagnosed chronic illness
- Growing up with an undiagnosed mental health condition
- Growing up with undiagnosed ADHD or autism
- Loss of a loved one or pet

> Complex trauma often develops over time, especially in relational environments where safety, attunement, or consistency were missing.

**How I Can Help:**

> I practice from a trauma-informed, attachment-informed, and neurobiologically informed lens. My work integrates:

- Attachment-informed therapy
- Neurobiological approaches to therapy
- Eye Movement Desensitization and Reprocessing (EMDR) → links to [`/approaches/emdr`](#emdr)
- Internal Family Systems (IFS) → links to [`/approaches/ifs`](#ifs)
- Somatic psychotherapy

> The goal is not just to talk about what happened, but to help your nervous system process and restore a sense of safety — both internally and in your environment.

**Trauma Therapy May Include:**

- Creating space for you to feel present and supported
- Understanding the role of attachment in trauma and stress responses
- Building awareness of your nervous system patterns
- Learning about the physiological and psychological effects of trauma
- Developing emotional regulation skills
- Mindfulness and present-moment practices to support dissociation
- Reestablishing safety in the body and physical space
- Grounding techniques to reduce panic and stress activation
- Strengthening boundaries in relationships
- Reprocessing traumatic memories toward adaptive resolution

> Trauma affects the mind, the body, and relationships. Healing involves working with all three, at a pace that feels safe and sustainable for you.

**CTA:** `Book a Session` → `/book`

---

#### Depression Deep-Dive

**URL:** `/specialties/depression`

**Intro:**

> You've been feeling unmotivated, disconnected, and hard on yourself. You're withdrawing more than you used to. It may feel like you're constantly trying just to stay afloat — putting in effort, but not actually getting anywhere. And perhaps one of the hardest parts is feeling misunderstood. People tell you to "just get out," "stay busy," or "think positive," but that advice doesn't touch the heaviness you're carrying.

> Trying to manage this on your own can feel frustrating, frightening, lonely, and exhausting. Maybe you've attempted different strategies — routines, distractions, self-help tools — yet nothing seems to shift in a lasting way. You may even be wondering whether you'll ever feel like yourself again.

> If this resonates, you may be experiencing depression.

**Common Symptoms of Depression:**

- Ongoing sadness, anxiety, or a sense of emptiness
- Irritability, agitation, or restlessness
- Loss of interest in activities that once felt enjoyable
- Reduced libido
- Difficulty concentrating
- Forgetfulness
- Trouble making decisions
- Insomnia or excessive sleeping
- Changes in appetite (overeating or loss of appetite)
- Suicidal thoughts or intrusive thoughts about death
- Unexplained aches and physical pain
- Gastrointestinal concerns
- Noticeable weight gain or loss
- Frequent crying
- Social withdrawal
- Feelings of hopelessness
- Thoughts of guilt, worthlessness, or helplessness

> If you recognize yourself in these symptoms, you are not alone. Whether your depression feels tied to a recent life event or has been present for a long time, support is available. Healing is possible, and you deserve relief.

**How I Can Help — Depression Types Treated:**

- **Major Depressive Disorder** (at least two weeks of persistent depressive symptoms)
- **Persistent Depressive Disorder (Dysthymia)** (two or more years of ongoing depressive symptoms)
- **Bipolar Disorder** (cycles of elevated and depressed mood)
- **Postpartum Depression** (depression during or after childbirth)
- **Premenstrual Dysphoric Disorder (PMDD)** (depressive symptoms linked to the menstrual cycle)

**Approaches Used:**

- Acceptance and Commitment Therapy (ACT)
- Cognitive Behavioral Therapy (CBT)
- Mindfulness-based therapies
- Neurobiological and mind-body approaches
- Eye Movement Desensitization and Reprocessing (EMDR) → [`/approaches/emdr`](#emdr)
- Internal Family Systems (IFS) → [`/approaches/ifs`](#ifs)

**Treatment for Depression Can Help You:**

- Understand the neurobiological underpinnings of depression
- Reduce and manage depressive symptoms
- Develop healthier coping patterns for stress
- Address physical symptoms linked to depression
- Increase distress tolerance
- Feel more grounded and regain a sense of agency
- Build skills to navigate difficult days more effectively

> Depression can narrow your world, but it does not have to define your future. With the right support, movement is possible — even when it feels out of reach right now.

**CTA:** `Book a Session` → `/book`

---

#### Anxiety Deep-Dive

**URL:** `/specialties/anxiety`

**Intro:**

> It can feel incredibly frustrating — and at times frightening — especially if panic attacks are part of your experience. When anxiety is constant, it's hard to remember what calm or ease even feels like. Instead, it may feel like you're stuck on an emotional roller-coaster you never chose to be on.

> You might have tried to manage it on your own — reading self-help books, watching videos, using online tools. Maybe they've offered insight or short-term relief, but the anxiety keeps returning. Despite your efforts, you still feel stuck.

> If this resonates, you may be experiencing an anxiety disorder.

> Anxiety is common — and it is treatable. With the right therapeutic support and consistent work, it's possible to reduce symptoms and regain a steadier sense of control in your life.

**Anxiety Disorders Treated:**

- Generalized Anxiety Disorder
- Social Anxiety
- Health Anxiety
- Specific Phobias
- Separation Anxiety
- Panic Attacks and Panic Disorder
- Unspecified Anxiety Disorder

**Common Signs and Symptoms of Anxiety:**

- Persistent worry or intrusive thoughts
- Difficulty controlling anxious thoughts
- Irritability or agitation
- Trouble concentrating
- Restlessness
- Sleep disturbances
- Panic attacks
- Muscle tension or pain
- Gastrointestinal distress
- Chest tightness or pressure

> Anxiety affects both the mind and the body. It is not "just overthinking" — it is a nervous system response that can become chronic when left unaddressed.

**How Therapy Can Help:**

- Acceptance and Commitment Therapy (ACT)
- Eye Movement Desensitization and Reprocessing (EMDR) → [`/approaches/emdr`](#emdr)
- Internal Family Systems (IFS) → [`/approaches/ifs`](#ifs)
- Neurobiological and mind-body integration techniques

**Treatment for Anxiety Can Help You:**

- Understand the neurobiological mechanisms driving anxiety
- Identify triggers and maintaining patterns
- Learn to defuse from intrusive or catastrophic thoughts
- Regulate your nervous system responses
- Build practical coping strategies
- Address underlying stressors
- Reduce physical symptoms such as tension and pain
- Develop sustainable habits that support long-term stability

> Anxiety can shrink your world — but with structured, collaborative work, it doesn't have to continue running your life.

**CTA:** `Book a Session` → `/book`

---

#### Eating Disorder Deep-Dive

**URL:** `/specialties/eating-disorders`

**Intro:**

> It can feel exhausting to have your thoughts constantly revolve around food, your body, or control. Eating may feel charged with anxiety, guilt, or shame. At times, restricting, bingeing, purging, or obsessing over food might seem like the only way to cope — even when part of you knows it's causing harm.

> You may have tried to manage it privately. Maybe you've followed meal plans, read recovery content, promised yourself you'd "do better," or swung between extremes of control and overwhelm. You might feel stuck in a cycle that's hard to explain to others — and even harder to step out of alone.

> If this sounds familiar, you may be struggling with an eating disorder or disordered eating.

> Eating disorders are serious — but they are treatable. With structured, compassionate support, it's possible to reduce symptoms, rebuild trust with your body, and move toward a more stable relationship with food and yourself.

**Eating Disorders Treated:**

- Anorexia Nervosa
- Bulimia Nervosa
- Binge Eating Disorder
- Avoidant/Restrictive Food Intake Disorder (ARFID)
- Other Specified Feeding or Eating Disorders (OSFED)
- Chronic dieting and disordered eating patterns
- Body image distress

**Common Signs and Symptoms of Eating Disorders:**

- Preoccupation with weight, shape, calories, or food rules
- Restricting intake or eliminating entire food groups
- Binge eating episodes
- Purging behaviors (vomiting, laxatives, excessive exercise)
- Intense guilt or shame after eating
- Fear of weight gain
- Distorted body image
- Avoidance of eating in front of others
- Mood changes linked to food or body image
- Physical symptoms such as fatigue, dizziness, gastrointestinal issues, or menstrual irregularities

> Eating disorders affect both psychological and physical health. They are not about vanity or lack of discipline — they are complex coping mechanisms often rooted in deeper emotional, relational, or trauma-related experiences.

**How Therapy Can Help:**

- Cognitive Behavioral Therapy (CBT) for eating disorders
- Internal Family Systems (IFS) → [`/approaches/ifs`](#ifs)
- Eye Movement Desensitization and Reprocessing (EMDR) when trauma is present → [`/approaches/emdr`](#emdr)
- Somatic and nervous system regulation work

**Treatment for Eating Disorders Can Help You:**

- Understand the function your eating behaviors are serving
- Identify triggers and maintaining patterns
- Reduce shame and self-criticism
- Rebuild a safer, more regulated relationship with your body
- Develop sustainable coping skills
- Improve emotional regulation
- Address underlying trauma or attachment wounds
- Move toward nourishment without fear or rigidity

> Recovery is not about control or perfection. It is about building safety — in your body, your emotions, and your relationship with yourself. With support, change is possible.

**CTA:** `Book a Session` → `/book`

---

#### Addiction Deep-Dive

**URL:** `/specialties/addiction`

**Intro:**

> Addiction is rarely about a simple failure of will. It is not resolved by deciding, once and for all, to stop. When we look more closely, addiction is almost always an attempt to manage pain. It is a response, not to pleasure but to suffering.

> Human beings are wired to avoid unbearable emotional pain. When early wounds, trauma, loss, or chronic stress go unprocessed, we find ways to soothe ourselves. Substances, compulsive behaviours, and numbing strategies offer temporary relief. At that moment, they work. They regulate what feels overwhelming. The tragedy is that what begins as relief gradually becomes another source of suffering, tightening into obsession, shame, and isolation.

> Much of society misunderstands addiction. It is reduced to "bad choices" or "poor decisions." While choices are involved, they exist within a larger context. Addiction often grows from unaddressed trauma, attachment disruptions, and environments that could not adequately hold or protect us. To treat addiction without addressing the pain beneath it is to miss its purpose.

> Healing requires compassion and responsibility at the same time. The individual must participate actively in their recovery, but we must also acknowledge the systems surrounding them. Stigma, marginalization, and punitive responses often deepen the very wounds that fuel addictive patterns. When people struggling with addiction are seen only through their behaviour, their humanity is overlooked.

> In my work, addiction is approached through a trauma-informed and attachment-informed lens. We explore not only the behaviour, but the pain it is attempting to soothe. We work to gently interrupt the cycle, not through shame, but through understanding, nervous system regulation, and building safer ways of meeting unmet needs.

> Recovery is not about moral correction. It is about healing the wound that made the addiction necessary in the first place.

**Types of Addiction Addressed:**

- **Substance Abuse:** Alcohol, Opioids, Nicotine
- **Behavioural Changes:** Sex, Porn, Gaming, Gambling, Shopping, etc.
- **Impulse Control / Process Addictions:** Compulsive Eating, Exercise, Self Harm

**CTA:** `Book a Session` → `/book`

---

#### Couples Therapy Deep-Dive

**URL:** `/specialties/couples-therapy`

**Content:**

> Couples counseling can be supportive when partners are moving through a difficult season in their relationship. Most couples experience moments of disconnection, recurring conflict, or relational "stuck points." Working with a therapist can help you understand what's happening beneath the surface — whether the goal is to reconnect, repair, or separate in a thoughtful and respectful way.

> Couples therapy can also be valuable if you're not in crisis but want to strengthen your foundation. Many partners seek support to communicate more effectively, understand each other more deeply, and build a secure, mutually supportive partnership.

> It can be challenging to navigate unfamiliar transitions — such as relocation, career changes, family stress, betrayal, parenting shifts, or evolving identities — without falling into reactive patterns. A couples therapist provides a structured, balanced space where both partners can feel heard. The work is collaborative and fair, with the focus on clarity, accountability, and helping you move forward with intention — together or apart.

> Couples therapy isn't about "fixing" one partner or offering quick solutions. Instead, it focuses on helping both of you understand the underlying dynamics shaping the relationship — and creating a more intentional blueprint for how you want to move forward.

> In the process, we explore the factors each person brings into the relationship: attachment styles, family-of-origin patterns, trauma history (where relevant), communication habits, conflict responses, and coping strategies. Many recurring issues — including codependent patterns, frequent fighting, or breakdowns in communication — make more sense when viewed through this broader lens.

**CTA:** `Book a Session` → `/book#couples`

---

### Page 6 — Book a Session / Contact

**URL:** `/book`
**Purpose:** Booking page. Offers three session types with Calendly or WhatsApp integration.

#### Section 6.1 — Session Types

| Session Type           | Anchor        | Description             |
| ---------------------- | ------------- | ----------------------- |
| Individual             | `#individual` | One-on-one therapy      |
| Family                 | `#family`     | Family therapy sessions |
| Relationship / Couples | `#couples`    | Couples counseling      |

#### Section 6.2 — Booking Options

- **Calendly** integration for scheduling
- **WhatsApp** direct link for inquiries

---

### Page 7 — Learn More / Resources

**URL:** `/learn`

| Section             | Anchor          | Content                                  |
| ------------------- | --------------- | ---------------------------------------- |
| FAQs                | `#faqs`         | Frequently Asked Questions (content TBD) |
| Session Guidelines  | `#guidelines`   | What to expect in sessions               |
| Client Testimonials | `#testimonials` | Social proof                             |
| Contact             | `#contact`      | Contact form or email                    |
| Privacy + Terms     | `#privacy`      | Privacy policy and terms of service      |

---

## 7. Internal Hyperlink Map

> This table defines every clickable hyperlink in the site. When a disorder or modality name appears in body text anywhere on the site, it should hyperlink to the corresponding page.

| Trigger Text (clickable)            | Destination URL                  | Page(s) Where It Appears                                   |
| ----------------------------------- | -------------------------------- | ---------------------------------------------------------- |
| Addiction                           | `/specialties/addiction`         | Home, Specialties hub                                      |
| C-PTSD                              | `/specialties/c-ptsd`            | Home, Specialties hub                                      |
| Eating Disorder / Body Image        | `/specialties/eating-disorders`  | Home, Specialties hub, About                               |
| Abuse (Sexual, Emotional, Physical) | `/specialties/abuse`             | Home, Specialties hub                                      |
| Relationship and Family Therapy     | `/specialties/relationships`     | Home, Specialties hub                                      |
| Trauma                              | `/specialties/trauma`            | Home, Specialties hub, About                               |
| Depression                          | `/specialties/depression`        | Home, Specialties hub                                      |
| Anxiety                             | `/specialties/anxiety`           | Home, Specialties hub                                      |
| EMDR / EMDR Training                | `/approaches/emdr`               | Home, About, Trauma, Depression, Anxiety, Eating Disorders |
| IFS / Internal Family Systems       | `/approaches/ifs`                | Home, About, Trauma, Depression, Anxiety, Eating Disorders |
| CBT                                 | `/approaches/cbt`                | Home, About, specialties pages                             |
| Enmeshment Trauma                   | `/specialties/enmeshment-trauma` | Home, Specialties hub                                      |
| LGBTQ Affirmative Therapy           | `/specialties/lgbtq`             | Home, Specialties hub                                      |
| Mood Disorders                      | `/specialties/mood-disorders`    | Home, Specialties hub                                      |
| Relationships                       | `/specialties/relationships`     | Home                                                       |
| Boundaries/Communication            | `/specialties/boundaries`        | Home                                                       |
| Book a Session (all CTA buttons)    | `/book`                          | Every page                                                 |
| Individual (book)                   | `/book#individual`               | Book page                                                  |
| Couples / Relationship (book)       | `/book#couples`                  | Book page                                                  |
| Family (book)                       | `/book#family`                   | Book page                                                  |
| FAQs                                | `/learn#faqs`                    | Footer, Learn More page                                    |
| Testimonials                        | `/learn#testimonials`            | Footer, Learn More page                                    |
| Contact                             | `/learn#contact`                 | Footer                                                     |
| Privacy + Terms                     | `/learn#privacy`                 | Footer                                                     |

---

## 8. CTA Logic

| CTA Button Label | Location                      | Destination     |
| ---------------- | ----------------------------- | --------------- |
| `Book a Session` | Home Hero                     | `/book`         |
| `Book a Session` | Home – After specialties list | `/book`         |
| `Book a Session` | Trauma page                   | `/book`         |
| `Book a Session` | Anxiety page                  | `/book`         |
| `Book a Session` | Depression page               | `/book`         |
| `Book a Session` | Eating Disorders page         | `/book`         |
| `Book a Session` | Addiction page                | `/book`         |
| `Book a Session` | Couples Therapy page          | `/book#couples` |
| `Book a Session` | About page                    | `/book`         |

---

_Document generated from `website_content_loose.md` — content preserved verbatim. Design details and navigation architecture added by Antigravity._
