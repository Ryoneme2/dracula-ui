import React from 'react'
import { Button, Heading, TextProps, ButtonProps } from '../../..'
import { Box, colors } from '../../Color/Box'
import { Text } from '../../Typography/Text'

export default {
  title: 'Button'
}

export const Buttons = (props?: Partial<TextProps>) => (
  <Box color="black" style={{ padding: '1rem 2rem' }}>
    <Heading
      size="heading-2"
      color="white"
      style={{ padding: 0, marginTop: 0 }}
    >
      .drac-btn
    </Heading>

    {Object.keys(colors).map(color => {
      return (
        <div key={color}>
          <Box
            style={{
              display: 'flex',
              justifyContent: 'space-around'
            }}
          >
            <Box>
              <Text color="white">.drac-btn .{colors[color]}</Text>
              <Box>
                <Button
                  themeColor={color as ButtonProps['themeColor']}
                  style={{ margin: '1rem' }}
                >
                  Normal 🤠
                </Button>

                <Button
                  themeColor={color as ButtonProps['themeColor']}
                  style={{ margin: '1rem' }}
                  disabled
                >
                  Normal 🤠
                </Button>
              </Box>
            </Box>

            <Box>
              <Text color="white">.drac-btn-ghost .{colors[color]}</Text>
              <Box>
                <Button
                  themeColor={color as ButtonProps['themeColor']}
                  style={{ margin: '1rem' }}
                  variant="ghost"
                >
                  Ghost 👻
                </Button>
                <Button
                  themeColor={color as ButtonProps['themeColor']}
                  style={{ margin: '1rem' }}
                  variant="ghost"
                  disabled
                >
                  Ghost 👻
                </Button>
              </Box>
            </Box>

            <Box>
              <Text color="white">.drac-btn-outline .{colors[color]}</Text>
              <Box>
                <Button
                  themeColor={color as ButtonProps['themeColor']}
                  style={{ margin: '1rem' }}
                  variant="outline"
                >
                  Outline
                </Button>
                <Button
                  themeColor={color as ButtonProps['themeColor']}
                  style={{ margin: '1rem' }}
                  variant="outline"
                  disabled
                >
                  Outline
                </Button>
              </Box>
            </Box>
          </Box>
        </div>
      )
    })}
  </Box>
)