data_action = [
    {
        title: "공격",
        icon: "crossed-swords",
        subtitle: "근접 또는 장거리 공격",
        description: "근접 또는 장거리 공격을 합니다.",
        reference: "PHB, pgs. 192,194-195.",
        bullets: [
            "파이터의 <i>행동 연쇄</i> 요소 같은 몇몇 기능들을 이용하면, 당신은 공격 행동으로 여러 차례의 공격을 가할 수도 있습니다. 각각의 공격들은 각각의 명중 굴림을 사용하고 다른 생물을 목표로 지정할 수 있습니다. 당신은 공격 간에 움직일 수 있습니다.",
            "당신이 한 손에 드는 경량형 근접 무기를 사용하여 공격 행동을 취한 경우, 추가 행동을 사용하여 반대편 손에 쥐고 있는 다른 경량형 근접 무기로도 공격을 가할 수 있습니다. (see the <i>Offhand attack</i> bonus action).",
            "공격 횟수중 1회를 대신해 붙잡기 또는 밀어붙이기를 사용할 수 있습니다.",
            "몇몇 상태은 공격 굴림에 이점을 얻습니다: 장님 상태, 마비 상태, 석화 상태, 포박 상태, 충격 상태, 또는 무의식 상태의 크리쳐를 공격; 넘어진 크리쳐를 5ft내에서 근접 공격; 투명 상태 또는 은신 상태의 크리쳐의 공격.",
            "몇몇 상태은 공격 굴림에 불리점을 얻습니다: 투명 상태 또는 은신 상태의 크리쳐를 공격하려는 명중 굴림; 넘어진 상태의 크리쳐를 장거리 공격하려는 명중 굴림; 장님 상태, 공포 상태, 중독 상태, 포박 상태의 크리쳐의 명중 굴림."
        ]
    },
    {
        title: "붙잡기",
        icon: "grab",
        subtitle: "특별한 근접 공격",
        description: "크리쳐와 몸싸움을 하며 붙잡기를 시도합니다.",
        reference: "PHB, pg. 195.",
        bullets: [
            "당신이 어떤 크리쳐와 몸싸움을 하며 붙잡으려 한다면, 공격 행동을 사용할 때 특별한 형태의 근접 공격인 붙잡기를 시도할 수 있습니다. 공격 행동 한 번으로 여러 번 명중 굴림을 할 수 있다면, 그 횟수 중 1회를 대신해 붙잡기를 시도할 수도 있습니다.",
            "당신은 자기보다 한 단계 큰 목표까지 붙잡을 수 있으며, 간격 내에 있는 목표만 붙잡으려 시도할 수 있습니다.",
            "붙잡으려면 최소한 한 손이 자유로워야 하며, 이 손을 이용해 판정합니다. 이 판정은 당신의 근력(운동) 판정과 목표의 근력(운동) 또는 민첩(곡예)판정 사이의 대결로 이루어집니다. (목표는 자신이 사용하는 판정을 정할 수 있습니다.) ",
            " 대결에서 당신이 이겼다면 목표는 붙잡힌 상태(붙잡힌 상태 참조)가 됩니다. (이동속도가 0이 됩니다.)"
        ]
    },
    {
        title: "Shove",
        icon: "hand",
        subtitle: "Special melee attack",
        description: "Shove a creature, either to knock it prone or push it away from you",
        reference: "PHB, pg. 195.",
        bullets: [
            "Using the <i>Attack</i> action, you can make a special melee attack to shove a creature. If you're able to make multiple attacks with the Attack action, this attack replaces one of them.",
            "The target of your shove must be no more than one size larger than you, and it must be within your reach.",
            "You make a Strength (Athletics) check contested by the target's Strength (Athletics) or Dexterity (Acrobatics) check (the target chooses the ability to use).",
            "If you win the contest, you either knock the target prone or push it 5 feet away from you."
        ]
    },
    {
        title: "Cast a spell",
        icon: "magic-swirl",
        subtitle: "Cast time of 1 action",
        description: "Cast a spell with a casting time of 1 action",
        reference: "PHB, pg. 192.",
        bullets: [
            "You can't cast a spell with you action and a different spell with your bonus action in the same turn, except if the action is used to cast a cantrip.",
            "The target of a spell must be within the spell's range. To target something, you must have a clear path to it, so it can't be behind total cover.",
            "Spells with material components do not consume the material unless explicitly stated. Unless the cost of a material is given, you can assume that the cost is negligible and the material is simply available in a component pouch.",
            "Some spells require you to maintain concentration in order to keep their magic active. If you lose concentration, such a spell ends. You lose concentration on a spell if you cast another spell that requires concentration or when you are incapacitated. Each time you take damage, you must make a Constitution saving throw to maintain your concentration. The DC equals 10 or half the damage you take, whichever number is higher."
        ]
    },
    {
        title: "Dash",
        icon: "sprint",
        subtitle: "Double movement speed",
        description: "Gain extra movement for the current turn",
        reference: "PHB, pg. 192.",
        bullets: [
            "The increase equals your speed, after applying any modifiers."
        ]
    },
    {
        title: "Disengage",
        icon: "journey",
        subtitle: "Prevent opportunity attacks",
        description: "Your movement doesn't provoke opportunity attacks for the rest of the turn",
        reference: "PHB, pg. 192.",
        bullets: [
        ]
    },
    {
        title: "Dodge",
        icon: "aura",
        subtitle: "Increase defenses",
        description: "Focus entirely on avoiding attacks",
        reference: "PHB, pg. 192.",
        bullets: [
            "Until the start of your next turn, any attack roll made against you has disadvantage if you can see the attacker, and you make Dexterity saving throws with advantage.",
            "You lose this benefit if you are <i>incapacitated</i> or if your speed drops to 0."
        ]
    },
    {
        title: "Escape",
        icon: "manacles",
        subtitle: "Escape a grapple",
        description: "Escape a grapple",
        reference: "PHB, pg. 195.",
        bullets: [
            "To escape a grapple, you must succeed on a Strength (Athletics) or Dexterity (Acrobatics) check contested by the grappler's Strength (Athletics) check.",
            "Escaping other conditions that restrain you (such as manacles) may require a Dexterity or Strength check, as specified by the condition."
        ]
    },
    {
        title: "Help",
        icon: "telepathy",
        subtitle: "Grant an ally advantage",
        description: "Grant an ally advantage on an ability check or attack",
        reference: "PHB, pg. 192.",
        bullets: [
            "The target gains advantage on the next ability check it makes to perform the task you are helping with.",
            "Alternatively, the target gains advantage on the next attack roll against against a creature within 5 feet of you.",
            "The advantage lasts until the start of your next turn."
        ]
    },
    {
        title: "Use Object",
        icon: "snatch",
        subtitle: "Interact, use special abilities",
        description: "Interact with a second object or use special object abilities",
        reference: "PHB, pg. 193.",
        bullets: [
            "You can interact with one object for free during your turn (such as drawing a weapon or opening a door). If you want to interact with a second object, use this action.",
            "When an object requires your action for its use, you also take this action."
        ]
    },
    {
        title: "Use shield",
        icon: "round-shield",
        subtitle: "Equip or unequip a shield",
        description: "Equip or unequip a shield",
        reference: "PHB, pgs. 144-146.",
        bullets: [
            "A shield always takes an action to equip or unequip.",
            "Armor takes several minutes to equip or unequip."
        ]
    },
    {
        title: "Hide",
        icon: "hood",
        subtitle: "",
        description: "Attempt to hide",
        reference: "PHB, pg. 192.",
        bullets: [
            "You can't hide from a creature that can see you. You must have total cover, be in a heavily obscured area, be invisible, or otherwise block the enemy's vision.",
            "If you make noise (such as shouting a warning or knocking over a vase), you give away your position.",
            "When you try to hide, make a Dexterity (Stealth) check and note the result. Until you are discovered or you stop hiding, that check's total is contested by the Wisdom (Perception) check of any creature that actively searches for signs of your presence.",
            "A creature notices you even if it isn't searching unless your Stealth check is higher than its Passive Perception.",
            "Out of combat, you may also use a Dexterity (Stealth) check for acts like concealing yourself from enemies, slinking past guards, slipping away without being noticed, or sneaking up on someone without being seen or heard."
        ]
    },
    {
        title: "Search",
        icon: "magnifying-glass",
        subtitle: "",
        description: "Devote your attention to finding something",
        reference: "PHB, pg. 193.",
        bullets: [
            "Depending on the nature of your search, the DM might have you make a Wisdom (Perception) check or an Intelligence (Investigation) check."
        ]
    },
    {
        title: "Ready",
        icon: "stopwatch",
        subtitle: "Choose trigger and action",
        description: "Choose a trigger and a response reaction",
        reference: "PHB, pg. 193.",
        bullets: [
            "First, you decide what perceivable circumstance will trigger your reaction.",
            "Then, you choose the action you will take in response to that trigger, or you choose to move up to your speed in response to it.",
            "When the trigger occurs, you can either take your reaction right after the trigger finishes or ignore the trigger.",
            "When you ready a spell, you cast it as normal but hold its energy, which you release with your reaction when the trigger occurs. To be readied, a spell must have a casting time of 1 action, and holding onto the spell's magic requires concentration"
        ]
    },
    {
        title: "Use class feature",
        icon: "embrassed-energy",
        subtitle: "Some features use actions",
        description: "Use a racial or class feature that uses an action",
        reference: "See class page for more information.",
        bullets: [

        ]
    },
    {
        title: "Stabilize a creature",
        icon: "first-aid",
        subtitle: "Administer first aid to a dying creature",
        description: "Stop a dying creature from needing to make death saving throws",
        reference: "PHB, pg. 197.",
        bullets: [
            "Make a Wisdom (Medicine) check with DC 10",
            "On a success, the creature is stable and no longer needs to make death saving throws",
            "A stable creature regains 1 hit point after 1d4 hours"
        ]
    },
    {
        title: "Improvise",
        icon: "juggler",
        subtitle: "Any action not on this list",
        description: "Perform any action you can imagine",
        reference: "PHB, pg. 193.",
        bullets: [
            "When you describe an action not detailed elsewhere in the rules, the DM tells you whether that action is possible and what kind of roll you need to make, if any, to determine success or failure."
        ]
    }
]
