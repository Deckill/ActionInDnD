data_condition = [
    {
        title: "장님 상태/Blinded",
        icon: "one-eyed",
        subtitle: "앞을 볼 수 없습니다.",
        description: "장님 상태의 크리쳐는 볼 수 없습니다.",
        reference: "PHB, pg. 290.",
        bullets: [
            "시각이 필요한 능력 판정에 자동적으로 실패합니다.",
            "장님 상태의 크리쳐를 공격하는 명중 굴림에는 이점이 가해집니다.",
            "장님 상태의 크리쳐가 가하는 명중 굴림에는 불리점이 가해집니다."
        ]
    },
    {
        title: "매혹 상태/Charmed",
        icon: "smitten",
        subtitle: "매혹됬습니다.",
        description: "다른 크리쳐에게 매혹됬습니다.",
        reference: "PHB, pg. 290.",
        bullets: [
            "매혹된 크리쳐는 매혹자를 공격할 수 없으며, 매혹자를 목표로 해로운 능력이나 마법 효과를 사용할 수 없습니다.",
            "매혹자는 매혹 상태의 크리쳐에 대해 사회적으로 교류할 때 모든 능력 판정에 이점을 받습니다."
        ]
    },
    {
        title: "귀머거리 상태/Deafened",
        icon: "elf-ear",
        subtitle: "들을 수 없습니다.",
        description: "귀머거리 상태의 크리쳐는 들을 수 없습니다.",
        reference: "PHB, pg. 290.",
        bullets: [
            " 듣기와 관련된 모든 능력 판정에 자동적으로 실패합니다."
        ]
    },
    {
        title: "탈진 상태/Exhaustion",
        icon: "crawl",
        subtitle: "탈진 상태입니다.",
        description: "탈진은 6단계로 구분됩니다.",
        reference: "PHB, pg. 291.",
        bullets: [
            "<table><tr><th>단계</th><th></th><th></th><th style='text-align:left'>효과</th></tr><tr><td>1</td><td></td><td></td><td>능력 판정에 불리점을 받습니다.</td></tr><tr><td>2</td><td></td><td></td><td>이동속도가 절반이 됩니다.</td></tr><tr><td>3</td><td></td><td></td><td>명중 굴림과 내성 굴림에 불리점을 받습니다.</td></tr><tr><td>4</td><td></td><td></td><td>최대 HP가 절반이 됩니다.</td></tr><tr><td>5</td><td></td><td></td><td>이동속도가 0이 됩니다.</td></tr><tr><td>6</td><td></td><td></td><td>죽음</td></tr></table>",
            "2단계 이상의 탈진 상태에 걸려 있는 크리쳐는 자기보다 아래 단계의 효과도 모두 받게 됩니다.",
            "긴 휴식을 마치며 음식과 물을 섭취한 크리쳐는 탈진이 1단계 낮아집니다.",
            "죽음에서 부활한 크리쳐도 탈진이 1단계 낮아집니다.",
            "탈진을 제거하는 효과는 설명에 쓰인 만큼 탈진 단계를 낮춥니다. 탈진 단계가 0 이하가 되면 탈진은 끝납니다."
        ]
    },
    {
        title: "공포 상태/Frightened",
        icon: "sharp-smile",
        subtitle: "공포에 질렸습니다.",
        description: "공포에 질렸습니다.",
        reference: "PHB, pg. 290.",
        bullets: [
            "공포 상태의 크리쳐는 공포의 대상이 시선 내에 있을 때 모든 능력 판정과 명중 굴림에 불리점을 받습니다.",
            "공포 상태의 크리쳐는 자의로 공포의 대상에게 가까이 갈 수 없습니다."
        ]
    },
    {
        title: "붙잡힘 상태/Grappled",
        icon: "grab",
        subtitle: "붙잡혔습니다.",
        description: "당신은 붙잡혔습니다.",
        reference: "PHB, pg. 290.",
        bullets: [
            "붙잡힌 상태의 크리쳐는 이동속도가 0이 됩니다. 그리고 해당 크리쳐는 이동속도에 어떤 보너스도 받을 수 없습니다.",
            "만약 붙잡은 자가 행동불능 상태에 빠지면 이 붙잡힘 상태는 자동으로 종료됩니다.",
            "강제 이동 효과로 인해 붙잡힌 크리쳐가 붙잡은 자의 간격에서 벗어나게 되면 붙잡힘 상태는 자동으로 종료됩니다. "
        ]
    },
    {
        title: "행동불능 상태/Incapacitated",
        icon: "internal-injury",
        subtitle: "행동 불능에 빠졌습니다.",
        description: "행동불능 상태의 크리쳐는 행동이나 반응행동을 할 수 없습니다.",
        reference: "PHB, pg. 290.",
        bullets: [
        ]
    },
    {
        title: "투명 상태",
        icon: "invisible",
        subtitle: "당신은 보이지 않습니다.",
        description: "투명 상태의 크리쳐는 마법이나 특별한 감각의 도움 없이 볼 수 없습니다.",
        reference: "PHB, pg. 291.",
        bullets: [
            "은신이 가능한가를 판정할 때, 투명 상태의 크리쳐는 심하게 가려져 있는 상태로 취급합니다. ",
            "이 크리쳐의 위치는 소리로 파악하거나 움직이며 남기는 흔적으로 알아차릴 수 있습니다.",
            "투명 상태의 크리쳐는 명중 굴림에 이점을 받습니다.",
            "투명 상태의 크리쳐를 공격하려는 명중 굴림에는 불리점을 받습니다."
        ]
    },
    {
        title: "마비 상태/Paralyzed",
        icon: "internal-injury",
        subtitle: "You are paralyzed",
        description: "You can't do anything",
        bullets: [
            "You are incapacitated and can't move or speak.",
            "Attack rolls against you have advantage.",
            "Any attack that hits you is a critical hit if the attacker is within 5 feet of you.",
            "You automatically fail Strength and Dexterity saving throws."
        ]
    },
    {
        title: "Petrified",
        icon: "stone-pile",
        subtitle: "You are transformed into stone",
        description: "You are transformed, along with any nonmagical objects you are wearing or carrying, into a solid inanimate substance (usually stone)",
        reference: "PHB, pg. 291.",
        bullets: [
            "Your weight increases by a factor of ten, and you cease aging.",
            "You are incapacitated, can't move or speak, and are unaware of your surroundings.",
            "Attack rolls against you have advantage.",
            "You automatically fail Strength and Dexterity saving throws.",
            "You have resistance to all damage.",
            "You are immune to poison and disease, though a poison or disease already in your system is only suspended, not neutralized."
        ]
    },
    {
        title: "Poisoned",
        icon: "deathcab",
        subtitle: "You are poisoned",
        description: "You are poisoned",
        reference: "PHB, pg. 292.",
        bullets: [
            "You have disadvantage on attack rolls and ability checks."
        ]
    },
    {
        title: "Prone",
        icon: "crawl",
        subtitle: "You are prone",
        description: "You are prone",
        reference: "PHB, pg. 292.",
        bullets: [
            "Your only movement option is to crawl, unless you stand up.",
            "You have disadvantage on attack rolls.",
            "Attack rolls against you have advantage if the attacker is within 5 feet of you, otherwise the attack roll has disadvantage."
        ]
    },
    {
        title: "Restrained",
        icon: "imprisoned",
        subtitle: "You are restrained",
        description: "You are restrained",
        reference: "PHB, pg. 292.",
        bullets: [
            "Your speed becomes 0, and you can't benefit from any bonus to your speed.",
            "You have disadvantage on attack rolls.",
            "Attack rolls against you have advantage.",
            "You have disadvantage on Dexterity saving throws."
        ]
    },
    {
        title: "Stunned",
        icon: "internal-injury",
        subtitle: "You are stunned",
        description: "You are stunned",
        reference: "PHB, pg. 292.",
        bullets: [
            "You are incapacitated, can't move, and can speak only falteringly.",
            "Attack rolls against you have advantage.",
            "You automatically fail Strength and Dexterity saving throws."
        ]
    },
    {
        title: "Unconscious",
        icon: "coma",
        subtitle: "You are unconscious",
        description: "You are unconscious",
        reference: "PHB, pg. 292.",
        bullets: [
            "You are incapacitated, can't move or speak, and are unaware of your surroundings.",
            "You drop whatever you're holding and fall prone.",
            "Attack rolls against you have advantage.",
            "Any attack that hits you is a critical hit if the attacker is within 5 feet of you.",
            "You automatically fail Strength and Dexterity saving throws.",
        ]
    },
    {
        title: "Dying",
        icon: "dead-head",
        subtitle: "You are dying",
        description: "You have been dropped to zero hit points and are dying",
        reference: "PHB, pg. 197.",
        bullets: [
            "If you are reduced to 0 hit points by damage that fails to kill you, you fall unconscious and are dying.",
            "If you receive any healing you immediately regain consciousness again and no longer dying.",
            "When dying, at the start of each of your turns you make a death saving throw. Roll a d20 and do not add any modifiers.",
            "A 10 or higher is a success, 9 or lower is a failure.",
            "On your third success, you become stable.",
            "On your third failure, you die.",
            "Rolling a 1 counts as two failures.",
            "Rolling a 20 immediately causes you to regain 1 hit point.",
            "You can also be stabilized by an ally taking the Stabilize action and succeeding on a DC 10 Wisdom (Medicine) check.",
            "Once stable, you regain 1 hit point after 1d4 hours."
        ]
    }
]
